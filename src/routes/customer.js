const express = require ('express');
const router = express.Router()

const customercontroller = require ('../controller/customercontroller');

router.get('/', customercontroller.list);

module.exports = router;
