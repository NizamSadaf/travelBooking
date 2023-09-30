const calculateAvgRating = reviews => {
    const totalRating=reviews?.reduce((acc,review)=>acc+review.rating,0)
    const avgRating = totalRating === 0 ? null : totalRating === 1 ? 1 : (totalRating / reviews?.length).toFixed(1)
    return {
        totalRating,
        avgRating
    }
}

export default calculateAvgRating