const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./EmployeeRoutes'));
router.use(require('./userRoutes'));

module.exports = router;
