let express = require('express')
let router = express.Router()
let {getMedicals ,
     setMedical ,
     updateMedical ,
     deleteMedical

} = require('../controllers/medicalController')

router.route('/').get(getMedicals).post(setMedical)
router.route('/:id').put(updateMedical).delete(deleteMedical)


module.exports = router