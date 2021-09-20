const express = require('express');
const router = express.Router();
const EmployeeController = require('../../controller/admin/EmployeeController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/Employee/create').post(auth(...[ 'createByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.addEmployee);
router.route('/admin/Employee/list').post(auth(...[ 'getAllByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.findAllEmployee);
router.route('/admin/Employee/:id').get(auth(...[ 'getByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.getEmployee);
router.route('/admin/Employee/count').post(auth(...[ 'getCountByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.getEmployeeCount);
router.route('/admin/Employee/aggregate').post(auth(...[ 'aggregateByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.getEmployeeByAggregate);
router.route('/admin/Employee/update/:id').put(auth(...[ 'updateByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.updateEmployee);    
router.route('/admin/Employee/partial-update/:id').put(auth(...[ 'partialUpdateByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.partialUpdateEmployee);
router.route('/admin/Employee/softDelete/:id').put(auth(...[ 'softDeleteByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.softDeleteEmployee);
router.route('/admin/Employee/softDeleteMany').put(auth(...[ 'softDeleteManyByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.softDeleteManyEmployee);
router.route('/admin/Employee/addBulk').post(auth(...[ 'addBulkByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.bulkInsertEmployee);
router.route('/admin/Employee/updateBulk').put(auth(...[ 'updateBulkByAdminInAdminPlatform' ]),checkRolePermission,EmployeeController.bulkUpdateEmployee);

module.exports = router;
