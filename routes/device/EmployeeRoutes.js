const express = require('express');
const router = express.Router();
const EmployeeController = require('../../controller/device/EmployeeController');
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
const employeeController = require('../../controller/device/employeeController');
router.route('/device/api/v1/Employee/create').post(auth(...[ 'createByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.addEmployee);
router.route('/device/api/v1/Employee/list').post(auth(...[ 'getAllByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.findAllEmployee);
router.route('/device/api/v1/Employee/:id').get(auth(...[ 'getByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.getEmployee);
router.route('/device/api/v1/Employee/count').post(auth(...[ 'getCountByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.getEmployeeCount);
router.route('/device/api/v1/Employee/aggregate').post(auth(...[ 'aggregateByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.getEmployeeByAggregate);
router.route('/device/api/v1/Employee/update/:id').put(auth(...[ 'updateByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.updateEmployee);    
router.route('/device/api/v1/Employee/partial-update/:id').put(auth(...[ 'partialUpdateByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.partialUpdateEmployee);
router.route('/device/api/v1/Employee/softDelete/:id').put(auth(...[ 'softDeleteByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.softDeleteEmployee);
router.route('/device/api/v1/Employee/softDeleteMany').put(auth(...[ 'softDeleteManyByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.softDeleteManyEmployee);
router.route('/device/api/v1/Employee/addBulk').post(auth(...[ 'addBulkByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.bulkInsertEmployee);
router.route('/device/api/v1/Employee/updateBulk').put(auth(...[ 'updateBulkByUserInDevicePlatform' ]),checkRolePermission,EmployeeController.bulkUpdateEmployee);
router.route('/test').get(auth(...[]),
  employeeController.Test);

module.exports = router;
