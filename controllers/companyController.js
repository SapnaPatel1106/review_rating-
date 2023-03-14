const compModelSchema = require('../models/compModelSchema')
const reviewModelSchema = require('../models/reviewModelSchema')


//Company Register Api
const companyAdd = async (req, res) => {
    const id = req.params.userId;
    try {
        const isCompanyExists = await compModelSchema.findOne({ companyId: req.body.companyId });
        if (isCompanyExists) {
            res.status(409).json({
                status: "failure",
                message: "Company is already exist",
            });
        } else {
            const companyAdd = await new compModelSchema(req.body)
            const filePath = `/uploads/${req.file.filename}`;
            companyAdd.company_logo = filePath;
            try {
                const company = await companyAdd.save();
                res.status(201).json({
                    success: true,
                    message: "Company added successfully",
                });
            } catch (err) {
                res.status(400).json({
                    success: "failure",
                    message: "error occur" + err.message
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}

//Get Company Api
const getCompanyList = async (req, res) => {
    try {
        const getCompany = await compModelSchema.find();
        res.status(200).json({
            success: true,
            message: "Company list are displayed",
            data: getCompany,
        });
    } catch (err) {
        res.status(404).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}

//Search Company Api
const searchCompany = async (req, res) => {
    try {
        const searchCompany = await compModelSchema.find({ city: req.body.city });
        res.status(200).json({
            success: true,
            message: "Company list are",
            data: searchCompany,
        });
    } catch (err) {
        res.status(404).json({
            success: "failure",
            message: err.message,
        });
    }
}

//Company detail Api
const companyDetail = async (req, res) => {
    const id = req.params.id;
    try {
        const companyDetail = await compModelSchema.findById(id);
        const reviewDetail = await reviewModelSchema.find({ company_id: id })
            .populate({
                path: "userId",
                select: "userName profilepic city",
            });
        const companyAndReview = {
            company: companyDetail,
            review: reviewDetail
        }
        res.status(200).json({
            success: true,
            data: companyAndReview
        });
    } catch (err) {
        res.status(404).json({
            success: "failure",
            message: err.message,
        });
    }
}


module.exports = {
    companyAdd,
    getCompanyList,
    searchCompany,
    companyDetail
}
