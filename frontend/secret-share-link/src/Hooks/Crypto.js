let cryptoObject=window.crypto
let subtleObject=window.crypto.subtle

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
    return customKey
}


async function EncryptData(text)
{
    //Text encoder 
    let key=await generateKey()
    let encoderObj=new TextEncoder()
    let encodedText=encoderObj.encode(text)
    const iv=cryptoObject.getRandomValues(new Uint8Array(12))
    let cipherTextArrayBuffer=await subtleObject.encrypt({ name: "AES-GCM", iv },key,encodedText);
     console.log("cipher text array buffer",cipherTextArrayBuffer);
     
    return [cipherTextArrayBuffer,iv,key]
}

let encryptedData=EncryptData("rohitgonga sdfdfddf")



async function DecryptData()
{
  let ArrayObject=await encryptedData
  let [cipherTextArrayBuffer,iv,key]=ArrayObject
  let plainTextArrayBuffer=await subtleObject.decrypt({ name: "AES-GCM", iv }, key,cipherTextArrayBuffer)
  let decodeObject=new TextDecoder()
  let secretData=decodeObject.decode(plainTextArrayBuffer)
  console.log("the secret data is here",secretData); 
}

DecryptData()
