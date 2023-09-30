import Tour from "../models/Tour.js"

export const addTour = async (req, res) => {
    const newTour = Tour({
        ...req.body
    })
    try {
        await newTour.save()
        res.status(200).json({
            success: true,
            message: "Tour added successfully",
            data:newTour
        })
    } catch (error) {
         res.status(500).json({
            msg:"Tour Can't Added successfully"
        })
    }
}

export const getTours = async (req, res) => {
     const page=parseInt(req.query.page)
    try {
       
        const tours = await Tour.find({})
            .populate("reviews")
            .skip(page*8)
            .limit(8)
        
        
        console.log(tours.length)
        res.status(200).json({
            success: true,
            count:tours.length,
            data:tours
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}

export const getToursBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')
    const maxGroupSize=parseInt(req.query.maxGroupSize)
    const distance=parseInt(req.query.distance)
    try {
        //gte means greater than equal
        // find all documents which matches city,maxGroupSize and at least > distance
        const tours = await Tour.find({city,maxGroupSize,distance:{$gte:distance}})
        res.status(200).json({
            success: true,
            count:tours.length,
            data:tours
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}

export const getFeaturedTours = async (req, res) => {
    try {
        const tours = await Tour.find({featured:true})
        res.status(200).json({
            success: true,
            count:tours.length,
            data:tours
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}

export const getTourCount = async (req, res) => {
    try {
        const tours = await Tour.estimatedDocumentCount()
        res.status(200).json({
            success: true,
            data:tours
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}

export const getTour = async (req, res) => {
    try {
        const tour = await Tour.findOne({
            _id:req.params.id
        }).populate("reviews")
         res.status(200).json({
            success: true,
            data:tour
        })
    } catch (error) {
        res.status(500).json({
        msg:error.msg
    })
    }
    
}

export const deleteTour = async (req, res) => {
    try {
        await Tour.deleteOne({
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

export const updateTour = async (req, res) => {
    try {
        const updatedTour=await Tour.findByIdAndUpdate(req.params.id,{...req.body})
        res.status(200).json({
            success:true,
            data:updatedTour
        })
    } catch (error) {
         res.status(500).json({
            msg:"Todo Can't updated successfully"
        })
    }
}



