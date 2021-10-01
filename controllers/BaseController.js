module.exports =  class BaseController {
     errorHandler = (error,res) => {
        if(error.details[0].message){
            console.log(error.details[0].message);
            return res.status(400).json( {error: joiError.details[0].message})
        }else if(error)
    }
}