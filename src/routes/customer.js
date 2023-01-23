const express = require('express');
const router = express.Router();

const customerController=require('../controllers/customerController.js');

router.get('/',customerController.list);
router.post('/add_customer',customerController.save);
router.get('/delete_customer/:id',customerController.delete);


router.get('/update_customer/:id',customerController.edit);
router.post('/update_customer/:id',customerController.update);

module.exports = router;