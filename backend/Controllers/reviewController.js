import Tour from "../models/Tour.js"
import Review from "../models/Review.js"


export const createReview = async (req, res) => {
  const tourId = req.params.tourId;

  try {
    const newReview = new Review({
      ...req.body,
      productId: tourId   // ✅ FIX: map tourId → productId
    });

    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id }
    });

    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview
    });

  } catch (error) {
    console.log(error);  // 🔥 VERY IMPORTANT
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};