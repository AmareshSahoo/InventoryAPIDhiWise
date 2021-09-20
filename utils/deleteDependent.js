let Employee = require('../model/Employee');
let User = require('../model/user');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('../utils/dbService');

const deleteEmployee = async (filter) =>{
  try {
    return await Employee.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter8554 = { 'addedBy': { '$in': user } };
      const user5721 = await deleteUser(userFilter8554);
      const userFilter9695 = { 'updatedBy': { '$in': user } };
      const user2033 = await deleteUser(userFilter9695);
      const userTokensFilter9201 = { 'userId': { '$in': user } };
      const userTokens2691 = await deleteUserTokens(userTokensFilter9201);
      const userRoleFilter1311 = { 'userId': { '$in': user } };
      const userRole9738 = await deleteUserRole(userRoleFilter1311);
      return await User.deleteMany(filter);
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    return await UserTokens.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter3574 = { 'roleId': { '$in': role } };
      const routeRole9384 = await deleteRouteRole(routeRoleFilter3574);
      const userRoleFilter3758 = { 'roleId': { '$in': role } };
      const userRole8959 = await deleteUserRole(userRoleFilter3758);
      return await Role.deleteMany(filter);
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter7194 = { 'routeId': { '$in': projectroute } };
      const routeRole4868 = await deleteRouteRole(routeRoleFilter7194);
      return await ProjectRoute.deleteMany(filter);
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    return await RouteRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    return await UserRole.deleteMany(filter);
  } catch (error){
    throw new Error(error.message);
  }
};

const countEmployee = async (filter) =>{
  try {
    const EmployeeCnt =  await Employee.countDocuments(filter);
    return { Employee : EmployeeCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter2408 = { 'addedBy': { '$in': user } };
      const user8792Cnt = await countUser(userFilter2408);
      const userFilter4627 = { 'updatedBy': { '$in': user } };
      const user4648Cnt = await countUser(userFilter4627);
      const userTokensFilter0873 = { 'userId': { '$in': user } };
      const userTokens7891Cnt = await countUserTokens(userTokensFilter0873);
      const userRoleFilter7325 = { 'userId': { '$in': user } };
      const userRole3432Cnt = await countUserRole(userRoleFilter7325);
      const userCnt =  await User.countDocuments(filter);
      let response = { user : userCnt  };
      response = {
        ...response,
        ...user8792Cnt,
        ...user4648Cnt,
        ...userTokens7891Cnt,
        ...userRole3432Cnt,
      };
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter9445 = { 'roleId': { '$in': role } };
      const routeRole0108Cnt = await countRouteRole(routeRoleFilter9445);
      const userRoleFilter2993 = { 'roleId': { '$in': role } };
      const userRole8606Cnt = await countUserRole(userRoleFilter2993);
      const roleCnt =  await Role.countDocuments(filter);
      let response = { role : roleCnt  };
      response = {
        ...response,
        ...routeRole0108Cnt,
        ...userRole8606Cnt,
      };
      return response;
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter8916 = { 'routeId': { '$in': projectroute } };
      const routeRole6448Cnt = await countRouteRole(routeRoleFilter8916);
      const projectRouteCnt =  await ProjectRoute.countDocuments(filter);
      let response = { projectRoute : projectRouteCnt  };
      response = {
        ...response,
        ...routeRole6448Cnt,
      };
      return response;
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEmployee = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await Employee.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await Employee.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,loggedInUser) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const userFilter0685 = { 'addedBy': { '$in': user } };
      const user9032 = await softDeleteUser(userFilter0685);
      const userFilter7639 = { 'updatedBy': { '$in': user } };
      const user5999 = await softDeleteUser(userFilter7639);
      const userTokensFilter5472 = { 'userId': { '$in': user } };
      const userTokens2749 = await softDeleteUserTokens(userTokensFilter5472);
      const userRoleFilter9891 = { 'userId': { '$in': user } };
      const userRole7440 = await softDeleteUserRole(userRoleFilter9891);
      if (loggedInUser && loggedInUser.id)
        return await User.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await User.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await UserTokens.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await UserTokens.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,loggedInUser) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter8510 = { 'roleId': { '$in': role } };
      const routeRole8652 = await softDeleteRouteRole(routeRoleFilter8510);
      const userRoleFilter9138 = { 'roleId': { '$in': role } };
      const userRole1911 = await softDeleteUserRole(userRoleFilter9138);
      if (loggedInUser && loggedInUser.id)
        return await Role.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await Role.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,loggedInUser) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter4891 = { 'routeId': { '$in': projectroute } };
      const routeRole4815 = await softDeleteRouteRole(routeRoleFilter4891);
      if (loggedInUser && loggedInUser.id)
        return await ProjectRoute.updateMany(filter, {
          isDeleted:true,
          updatedBy:loggedInUser.id
        });
      else
        return await ProjectRoute.updateMany(filter,{ isDeleted:true });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await RouteRole.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await RouteRole.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,loggedInUser) =>{
  try {
    if (loggedInUser && loggedInUser.id)
      return await UserRole.updateMany(filter, {
        isDeleted:true,
        updatedBy:loggedInUser.id
      });
    else
      return await UserRole.updateMany(filter,{ isDeleted:true });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteEmployee,
  deleteUser,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countEmployee,
  countUser,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteEmployee,
  softDeleteUser,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
