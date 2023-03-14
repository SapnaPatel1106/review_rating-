const mongoose = require('mongoose')

const reviewModelSchema = require('../models/reviewModelSchema')


//Taking Review Api
const addReview = async (req, res) => {
    const { enterYourReview, rating, company_id, userId } = req.body
    try {
        const addReview = await new reviewModelSchema(req.body)
        try {
            addReview.save();
            res.status(201).json({
                success: true,
                message: "Review added successfully",
            });
        } catch (err) {
            res.status(400).json({
                success: "failure",
                message: "error occur" + err.message
            });
        }
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: err.message
        });
    }
}

//update review api
const updateReview = async (req, res) => {
    const id = req.params;
    try {
        const update = await reviewModelSchema.findByIdAndUpdate(id, { $set: req.body });
        update.save();
        res.status(202).json({
            success: "success",
            message: "Review update successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: err.message
        });
    }
}

//delete review api
const deleteReview = async (req, res) => {
    const id = req.params;
    try {
        const reviewDelete = await reviewModelSchema.findByIdAndDelete(id, { $set: req.body });
        reviewDelete.save();
        res.status(200).json({
            success: "success",
            message: "Review delete successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}

//reviewList api
const reviewList = async (req, res) => {
    console.log(req.body)
    try {
        const getReview = await reviewModelSchema.find();
        res.status(200).json({
            success: "success",
            message: "Review list are displayed",
            value: getReview,
        });
    } catch (err) {
        res.status(404).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}

//All review detail api
const reviewDetails = async (req, res) => {
    let id = req.params.id;
    try {
        const detailReview = await reviewModelSchema.findOne({ id: id })
            .populate({
                path: "userId",
                select: "userName profilepic city",
            }).populate({
                path: "company_id",
                select: "companyName company_logo location foundedOn city",
            });
        return res.status(200).json({
            success: "success",
            message: "Here is the review",
            data: detailReview
        });
    } catch (error) {
        res.status(404).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}


module.exports = {
    addReview,
    updateReview,
    deleteReview,
    reviewList,
    reviewDetails
}
