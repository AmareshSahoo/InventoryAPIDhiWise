const employeeService = require('../../services/device/employeeService'); 
/* 
 * 
 */
const Test = async (req,res)=>{
  try {
    let result =  employeeService.Test();
    if (result){
      return res.ok(result);
    }
  } catch (error) {
    throw error;
  }
};    

module.exports = { Test, };
