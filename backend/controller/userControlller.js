import User from "../model/userModel.js"


export const getCurrentUser = async(req,res)=>{
    try{
        const user = await User.findById(req,userId).select("-password")
        if(!User){
            return res.status(404).json({message:"User not found"})
        }

    } catch(error){
        return res.status(500).json({message:`getCurrentUser error 4{error}`})

    }
}