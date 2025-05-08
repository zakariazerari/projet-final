let asyncHandler = require('express-async-handler')

//@desc    Get medicals
//@route   GET /api/medicals
//@access  Private
let getMedicals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get medicals'})
})

//@desc    set medicals
//@route   POST /api/medicals
//@access  Private
let setMedical = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    
    res.status(200).json({message: 'Set medical'})
})

//@desc    Update medical
//@route   PUT /api/medicals/:id
//@access  Private
let updateMedical = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Update medical ${req.params.id}`})
})

//@desc    Update medical
//@route   PUT /api/medicals/:id
//@access  Private
let deleteMedical = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Delete medical ${req.params.id}`})
})

module.exports = {
    getMedicals,
    setMedical,
    updateMedical,
    deleteMedical
}