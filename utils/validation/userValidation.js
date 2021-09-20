/*
 * modelValidation.js
 * purpose     : request validation
 * description : validate each post and put request as per mongoose model
 *
 */
const joi = require('joi');
const { USER_ROLE } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');   
exports.schemaKeys = joi.object({
  username: joi.string().allow(null,''),
  password: joi.string().allow(null,''),
  email: joi.string().allow(null,''),
  name: joi.string().allow(null,''),
  _id: joi.string().allow(null,''),
  isActive: joi.boolean().allow(null,''),
  role: joi.number().integer().valid(...convertObjectToEnum(USER_ROLE)).allow(null,''),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date()
  }).allow(null,''),
  isDeleted: joi.boolean()
}).unknown(true);
exports.updateSchemaKeys = joi.object({
  username: joi.string().allow(null,''),
  password: joi.string().allow(null,''),
  email: joi.string().allow(null,''),
  name: joi.string().allow(null,''),
  _id: joi.string().allow(null,''),
  isActive: joi.boolean().allow(null,''),
  role: joi.number().integer().valid(...convertObjectToEnum(USER_ROLE)).allow(null,''),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date()
  }).allow(null,''),
  isDeleted: joi.boolean()
}).unknown(true);
