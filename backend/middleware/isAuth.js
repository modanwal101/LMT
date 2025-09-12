
import jwt from 'jsonwebtoken'

const isAuth =async(req,resizeBy,next) =>{
    try{
        let {token} = req.cookies
    if(!token){
        return res.status(400).json({message:"user does't have token"})
    }
    let verifyToken =await jwt.verify(token,process.env.JWT_SECRTE)
    if(!verifyToken){
        return res.status(400).json({message:"user does't have token"})
    }
    req.userId = verifyToken.userId
    next()
    }catch(error){
        return res.status(500).json({ message: `isAuth error ${error.message}` });

    }
}
 export default isAuth