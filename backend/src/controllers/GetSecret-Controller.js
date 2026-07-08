import { response } from "express"
import { passwordShareLink } from "../models/Password-share-link-model.js"

async function GetSecretandKey(req,res) {
    //query params from extract from route url 
    let {randomid}=req.params
    let savedDocument=await passwordShareLink.find({RandomShortId:randomid}).select("-isViewed -RandomShortId -LinkdeleteTime -_id")
    console.log("save documnt value is",savedDocument)
    if(savedDocument.length===0)
    {
        res.status(404).json(
            {
                "message":"requested data is not found"
            }
        )
        return
    }
    await passwordShareLink.deleteOne({
        RandomShortId:randomid
    })

    res.status(200).json(
        {
            savedDocument
        }
    )
}

export {GetSecretandKey}