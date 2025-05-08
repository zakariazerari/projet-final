let asyncHandler = require('express-async-handler')

let  Medical = require('../models/medicalModel')

//@desc    Get medicals
//@route   GET /api/medicals
//@access  Private
let getMedicals = asyncHandler(async (req, res) => {
let medicals = await Medical.find()

    res.status(200).json(medicals)
})

//@desc    set medicals
//@route   POST /api/medicals
//@access  Private
let setMedical = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    let medical = await Medical.create({
        text: req.body.text
    })
    
    res.status(200).json(medical)
})

//@desc    Update medical
//@route   PUT /api/medicals/:id
//@access  Private
let updateMedical = asyncHandler(async(req, res) => {
    let medical =await Medical.findById(req.params.id)

    if(!medical) {
        res.status(400)
        throw new Error('Medical not found')
    }
let updateMedical  = await Medical.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
})

    res.status(200).json(updateMedical)
})

//@desc    Update medical
//@route   PUT /api/medicals/:id
//@access  Private
let deleteMedical = asyncHandler(async(req, res) => {
    let medical =await Medical.findById(req.params.id)

    if(!medical) {
        res.status(400)
        throw new Error('Medical not found')
    }

    await Medical.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getMedicals,
    setMedical,
    updateMedical,
    deleteMedical
}