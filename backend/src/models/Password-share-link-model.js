import mongoose from "mongoose"
import { Schema } from "mongoose"
import { random } from "nanoid"

const passwordShareLinkSchema=new Schema(
    {   
        userEncryptedSecret:{
            type:String
        },
        privatePart:{
            type:String
        },
        isViewed:{
            type:Boolean,
            default:false
        },
        RandomShortId:{
            type:String,
        },
        LinkdeleteTime:{
            type:Date,
            expires:0,
            default:new Date().setSeconds(300)
        }
    }
)



const passwordShareLink=mongoose.model('passwordsharelink',passwordShareLinkSchema)


export { passwordShareLink }

