import { useRef } from "react";
import { useState } from "react";
import { EncryptData } from "../Hooks/Crypto.js";
import { SendDataToApi } from "../Hooks/fetchApi.js";
import PasswordLink from "./PasswordLink.jsx";
import { useCallback } from "react";



function CreateSecretLink() {
    const [Secret,SetSecret]=useState("")
    const [Link,SetLink]=useState(null)
    let CreateLinkSharePassword=async () => {
        // grab the plain text from state property
        // before calling check whether field is empty or not    
        if(Secret!="")
        {   
            // encrypt data
        //  {hiddenSecret,privatePart}
          let EncryptedArray=await EncryptData(Secret)
          let hiddenSecret=EncryptedArray[0]
          let privatePart=EncryptedArray[1]
          let jwk=EncryptedArray[2]
          let secretKey=jwk["k"]
          
          let bodyObject={
            hiddenSecret,
            privatePart
          }

          try {
          let response=await SendDataToApi("http://localhost:4000/secure/generateLink",bodyObject)
          let data=await response.json()
          let randomLinkId=data["randomLinkId"]
          let secretKeyHashBang="#"+secretKey
          let url=`http://localhost:5173/${randomLinkId}`+secretKeyHashBang
          console.log("the url is here now",url);
          SetLink(url)
          console.log("user data is here",data);
          } catch (error) {
            console.error(error)
          }
          return
        }
        alert("field is empty")
        return
    }
    let memoziedfun=useCallback(CreateLinkSharePassword,[Secret])
    return (
           <div className="bg-gray-200 p-4 h-[50vh] flex justify-center items-center">
           <div className="bg-teal-300 w-[60%] p-6 grid gap-4">
            <div>
            <h2>Create a one-time Link</h2>
            <p>your secret is encrypted in broswer before it leaves</p>
            </div>
            <form className="flex flex-col gap-2">
                <textarea id="secret"  onChange={
                    (e) => SetSecret(e.target.value) 
                } required="Please Fill The Field"  name="secret" rows="4" cols="55" value={Secret} className="border-2 resize-none bg-amber-300" autoFocus placeholder="Enter a Secret here.Get a secure one-time link in return"></textarea>
                <button type="button" onClick={memoziedfun} className="bg-purple-500  flex justify-center items-center cursor-pointer w-[15%] p-2">Create Link</button>
                <PasswordLink Linkid={Link}/>
            </form>
           </div>
           </div>
    );
}

export default CreateSecretLink;