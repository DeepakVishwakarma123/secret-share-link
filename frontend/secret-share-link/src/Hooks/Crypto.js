let cryptoObject=window.crypto
let subtleObject=window.crypto.subtle
let encoderObj=new TextEncoder()
let decodeObject=new TextDecoder()


async function generateKey()
{
    let customKey=await subtleObject.generateKey(
        {
            name:"AES-GCM",
            length:256
        },
        true,
        ["encrypt","decrypt"]
    )
    console.log("custome key",customKey);
    
    return customKey
}


async function EncryptData(text)
{
    //Text encoder 
    let key=await generateKey()
    let jwkjson=await subtleObject.exportKey("jwk",key)

   
    let encodedText=encoderObj.encode(text)
    
    const iv=cryptoObject.getRandomValues(new Uint8Array(12))
    
    let cipherTextArrayBuffer=await subtleObject.encrypt({ name: "AES-GCM", iv },key,encodedText);
    let cipherTextTypedArray=new Uint8Array(cipherTextArrayBuffer)

    let cipherTextBase64Url=cipherTextTypedArray.toBase64(
   { 
    alphabet: "base64url", 
    omitPadding: true 
  }
    )

     let ivTextBase64Url=iv.toBase64(
   { 
    alphabet: "base64url", 
    omitPadding: true 
  }
    )
  console.log("hello",cipherTextBase64Url);
  
    let array=[cipherTextBase64Url,ivTextBase64Url,jwkjson]
    return array
}






async function DecryptData(data,hash)
{ 
  
  let secretPartObject=data["savedDocument"][0]  
  let {userEncryptedSecret,privatePart}=secretPartObject
  let removedHashedString=hash.slice(1)
  
  let cipherInt8Array=Uint8Array.fromBase64(
    userEncryptedSecret ,
   {
    "alphabet":"base64url"
   }
  )
  
  let nonceInt8Array=Uint8Array.fromBase64(
    privatePart,
   {
    "alphabet":"base64url"
   }
  )
  let removedHashedInt8Array=Uint8Array.fromBase64(
    removedHashedString,
   {
    "alphabet":"base64url"
   }
  )

  let cryptoKey=await subtleObject.importKey(
    "raw",
    removedHashedInt8Array, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]
  )

  
  console.log("crypto object key",cryptoKey)

  let plainTextArrayBuffer=await subtleObject.decrypt({ name: "AES-GCM",iv:nonceInt8Array },cryptoKey,cipherInt8Array)
  let secretData=decodeObject.decode(plainTextArrayBuffer)
  console.log("the secret data is here",secretData); 
  return secretData
}

export {EncryptData,DecryptData,generateKey}