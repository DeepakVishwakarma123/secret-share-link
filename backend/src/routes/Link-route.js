import Router from "express"
import GenerateLink from "../controllers/Generatelink-Controller.js"
import { GetSecretandKey } from "../controllers/GetSecret-Controller.js"
const LinkRouter=Router()

//route /vanishlink/ reqeust to these routes

LinkRouter.route('/generateLink').get(GenerateLink)
LinkRouter.route('/getsecret/:randomid').get(GetSecretandKey)


export default LinkRouter