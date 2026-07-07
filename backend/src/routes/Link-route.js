import Router from "express"
import GenerateLink from "../controllers/Generatelink-Controller.js"

const LinkRouter=Router()

//route /vanishlink/ reqeust to these routes

LinkRouter.route('/generateLink').get(GenerateLink)



export default LinkRouter