const dbData = require('../db.js')
const {isValidateReqBody} = require('../validator/validation.js')
const getEmpDetails = (req, res) => {
      let req_body = req.body;
      if(isValidateReqBody(req_body)){
         if(Object.keys(req_body)?.length == 0){
            res.send({
                status : 1000,
                data: dbData
            })
         }
         else{
              const emp = dbData.emp_details.find((emp) => emp.emp_id == req_body.emp_id)
              const emp_details = [];
              emp_details.push(emp)
              res.send({
                 status: 1000,
                 data: {
                     emp_details
                 }
              })
         }
      }
      else{
         res.send({
            status: 1001,
            msg: 'Request object format error'
         })
      }
}


module.exports = getEmpDetails;
