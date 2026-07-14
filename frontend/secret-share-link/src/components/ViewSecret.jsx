import {FaEye} from "react-icons/fa"
import { DecryptData } from "../Hooks/Crypto"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HiddenData from "./HiddenData"



function ViewSecret(
    {
        data,hash
    }
)
{   
    const [secret,setSecret]=useState(false)  
    const [isSecretReceived,setSecretReceived]=useState(false)
    return (
          
        <div>

            {
            isSecretReceived?<HiddenData secret={secret}/>:   
            <div>
            <div className="flex capitalize gap-4 justify-center items-center text-3xl p-7">
            <FaEye/>
            a secret has been shared with you
         </div>
         <div className="flex flex-col p-4 gap-4 items-center">
            <div className="bg-teal-500 p-2">For your security, this secret stays hidden until you open it. Click below to reveal it.</div>
            <button type="button" className="bg-black  text-white p-2 cursor-pointer hover:bg-amber-700"
             onClick={
                 () => {
                     DecryptData(data,hash).then(
                         (data) => {
                             setSecret(data)
                             setSecretReceived(true)
                            }
                        )
                    }
                }>View Secret</button>
            <div className="bg-red-800 p-4 text-white font-semibold">
                Save this secret somewhere safe now. Once you leave this page, it can't be opened again.
            </div>
         </div>
         </div>
            }
                        </div>
    )
}

export default ViewSecret