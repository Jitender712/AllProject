var express = require('express');
var router = express.Router();
const Pcontroller = require('../controllers/Pcontroller');


// Create Router for CRUD  operation

router.post ("/" , Pcontroller.create);
router.get ("/" , Pcontroller.all_details);
router.get ("/:productId" , Pcontroller.product_detail);
router.put ("/:productId" ,Pcontroller.updateP);
router.delete ("/:productId" ,Pcontroller.deleteP);

module.exports = router;
