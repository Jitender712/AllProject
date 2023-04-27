var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontrol');


// Create Router for CRUD  operation

router.post ("/create" , usercontroller.create);
router.get ("/onterminal" , usercontroller.onterminal);
router.get ("/all_details" , usercontroller.all_details);
module.exports = router;
