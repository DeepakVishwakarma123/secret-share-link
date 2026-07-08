//function for generating a basic link
import {nanoid, random} from "nanoid"
import { passwordShareLink } from "../models/Password-share-link-model.js"


async function GenerateLink(req,res) {
    
    let bodyObject=req.body
    let {hiddenSecret,privatePart}=bodyObject
    let randomLinkId=nanoid(11)
    //instance of model object
    let passwordShareLinkDocument=new passwordShareLink(
        {
            userEncryptedSecret:hiddenSecret,
            privatePart:privatePart,
            RandomShortId:randomLinkId
        }
    )
    console.log(passwordShareLinkDocument);
    
    let savedDocument=await passwordShareLinkDocument.save()
    console.log("the saved document is",savedDocument);
    res.status(200).json({
        message:"link Generated Succesfull",
        randomLinkId:randomLinkId
    })
}

export default GenerateLink