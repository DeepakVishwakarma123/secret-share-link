import {FaEye} from "react-icons/fa"
import ViewSecret from "./ViewSecret"
import NothingIsLeft from "./NothingView"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetDataFromApi } from "../Hooks/fetchApi"
import { DecryptData } from "../Hooks/Crypto"
import { useLocation } from "react-router-dom"

function DecryptSecret()
{   
   let {linkid}=useParams()
   let {hash}=useLocation()
   const [showData,setData]=useState(null)
   useEffect(
    () => {
        let windowlocation=window.location
        console.log(windowlocation);
        
    GetDataFromApi(`http://localhost:4000/secure/getsecret/${linkid}`).then(
        (data) => {
            if(data["isDeleted"])
            {
                  setData(null)
            }
            else{
                setData(data)
            }  
        }
    ).catch(
        (err) => {
            console.error(err)
        }
    )
     }
    ,[]
   )
    return (
     <>
     {
     showData?<ViewSecret data={showData} hash={hash}/>:<NothingIsLeft/>
     }
     </>
    )
}


export default DecryptSecret