import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const { authentication } = req.headers
  console.log(authentication)
    if (authentication) {
      try {
        const token = authentication.split('Bearer ')[1];
        console.log(token)
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({
        message: "Authetication failure!",
      })
    }
    }
    else {
    res.status(401).json({
        message: "Authetication failure!",
      })
    }
    
}