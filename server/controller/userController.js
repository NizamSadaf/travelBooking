import User from '../models/User.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            success: true,
            data:users
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}
export const getUser = async (req, res) => {
    try {
        const user = await User.find({
            _id:req.params.id
        })
         res.status(200).json({
            success: true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}
export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({
            _id:req.params.id
        })
        res.status(200).json({
        success:true,
        msg:"Deleted"
    })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}
export const updateUser = async (req, res) => {
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{...req.body})
        res.status(200).json({
            success:true,
            data:updatedUser
        })
    } catch (error) {
         res.status(500).json({
            msg:"Todo Can't updated successfully"
        })
    }
}