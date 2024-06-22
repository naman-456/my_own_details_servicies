const isValidateReqBody = (req) => {
    let keys = Object.keys(req)
    if((keys?.length == 0) || (keys?.length == 1 && keys.includes('emp_id'))){
        return true
    }
    return false
}

module.exports = {isValidateReqBody}