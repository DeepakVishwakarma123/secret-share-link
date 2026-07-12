import { useState } from "react";
import { useRef } from "react";

function PasswordLink(
    {
        Linkid
    }
)
{  
    const [isCopy,setcopy]=useState("COPY")
    const inputref=useRef()

     let copyText=async () => {
     let copied=await navigator.clipboard.writeText(Linkid)
     inputref.current.select()
     setcopy("COPIED")
     setTimeout(() => {
        setcopy("COPY")
     }, 1000);
     console.log(copied)
    }
    return (
        Linkid &&  <div className="flex gap-2">
            <input ref={inputref} type="url" readOnly value={Linkid}  className="border-2 w-[90%]  p-3 bg-purple-600" />
            <button type="button" onClick={copyText} className="bg-red-500 p-2 cursor-pointer hover:bg-red-50">
                {
                    isCopy
                }
            </button>
        </div>
    )
}

export default PasswordLink