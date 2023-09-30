import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            photo: req.body.photo
        })
        await user.save()
        res.status(200).json({
            success: true,
            msg:"User added successfully"
        })
    } catch (error) {
         res.status(401).json({
            success: false,
            msg:"User can't added successfully"
        })
    }
}

export const login = async (req, res) => {
    try {
        console.log(req.body.email)
        const email = req.body.email
        let user = await User.findOne({ email })
        console.log(user)
        //if user doesn't exist
        if (!user) {
            res.status(401).json({
                success: false,
                msg:"User not found"
            })
        }
        else {
            const myPassword = req.body.password
            const checkPassword = await bcrypt.compareSync(myPassword, user.password)
            console.log(checkPassword)
        //If password incorrect
        if (!checkPassword) {
            res.status(401).json({
                success: false,
                msg:"Invalid Email or Password"
            })
        }
        else {
             const token =await jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "15d",
        });
        res.cookie('accessToken',token,{httpOnly:true,expiresIn:"15d"}).status(200).json({
            success: true,
            data: {
                user,
                token
            },
            role:user.role
        })
            console.log(token)
        }
        
        }
        
    } catch (errors) {
        return res.status(500).json({
            success: false,
            msg: errors.message
            
        })
        // console.log(error)

    }
}


export const logout = (req,res) => {
    res.clearCookie('accessToken')
}