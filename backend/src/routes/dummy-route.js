import Router from "express"
import Test from "../controllers/test-controller.js"

const testrouter=Router()

testrouter.route('/test').get(Test)

export default testrouter