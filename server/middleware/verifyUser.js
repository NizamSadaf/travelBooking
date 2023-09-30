import { verifyToken } from "./verifyToken.js"
export const verifyUser = (req, res, next) => {
    console.log(req.body)
     if (req.user.role === "user") {
            next()
        }
       else res.status(403).json({
            success: false,
            message:"You're not authenticated"
        })
}
export const verifyAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
            next()
        }
      else  res.status(403).json({
            success: false,
            message:"You're not authenticated"
        })
}