import Review from "../models/Review.js";

import Tour from "../models/Tour.js";

export const addReview = async (req, res) => {
    const tourId=req.params.tourId
    const newReview = Review({
        ...req.body
    })
    try {
        const savedReview = await newReview.save()
        await Tour.findByIdAndUpdate(tourId, {
            $push:{reviews:savedReview._id}
        })
        res.status(200).json({
            success: true,
            message: "Review added successfully",
            data:savedReview
        })
    } catch (error) {
         res.status(500).json({
            msg:"Review Can't Added successfully"
        })
    }
}



