/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
exports.schemaKeys = joi.object({
  name: joi.string().allow(null,''),
  _id: joi.string().allow(null,''),
  isActive: joi.boolean().allow(null,''),
  email: joi.string().email().allow(null,''),
  department: joi.string().allow(null,''),
  emp_code: joi.string().allow(null,''),
  designation: joi.string().allow(null,''),
  salary: joi.number().integer().allow(null,''),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  name: joi.string().allow(null,''),
  _id: joi.string().allow(null,''),
  isActive: joi.boolean().allow(null,''),
  email: joi.string().email().allow(null,''),
  department: joi.string().allow(null,''),
  emp_code: joi.string().allow(null,''),
  designation: joi.string().allow(null,''),
  salary: joi.number().integer().allow(null,''),
  isDeleted: joi.boolean()
}).unknown(true);
