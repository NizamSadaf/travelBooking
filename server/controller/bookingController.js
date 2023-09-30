import Booking from "../models/Booking.js";


export const addBooking = async (req, res) => {
    const tourId = req.params.tourId
    const newBooking = Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true,
            message: "Booking added successfully",
            data:savedBooking
        })
    } catch (error) {
         res.status(500).json({
            msg:"Tour Can't Added successfully"
        })
    }
}


export const getBooking = async (req, res) => {
    const bookingId=req.params.id
    try {
        const bookingDetails = await Booking.find({_id:bookingId})
        res.status(200).json({
            success: true,
            message: "",
            data:bookingDetails
        })
    } catch (error) {
         res.status(500).json({
            msg:"Tour Can't Added successfully"
        })
    }
}

export const getAllBooking = async (req, res) => {
    try {
        const bookingDetails = await Booking.find({})
        res.status(200).json({
            success: true,
            message: "",
            data:bookingDetails
        })
    } catch (error) {
         res.status(500).json({
            msg:"Tour Can't Added successfully"
        })
    }
}
