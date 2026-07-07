//function for generating a basic link
import {nanoid} from "nanoid"


async function GenerateLink(req,res) {
    let randomLinkId=nanoid(11)
    res.status(200).json({
        randomLinkId
    })
}

export default GenerateLink