import userModel from "../db/model.js";

class userController{
    static userRegistration = async(req,res)=>{
        const {name, email, password, confirm_password, tc} = req.body
        const user = userModel.findOne({email})

        if(user){
            res.send({"message":"failed", "message":"User already exist"})
        }
        else{
            if(name && email && password && confirm_passwor && tc){
                if(password === confirm_password){
                    console.log(req.body);
                }
                else{
                    res.send({"message":"failed", "message":"passwords doesn't match"})
                }
            }
            else{
                res.send({"message":"failed", "message":"all fields are required"})
            }
        }
    }
    static userLogin = async(req,res)=>{
        
    }
    static reset_pass_email = async(req,res)=>{
        
    }
    static userLogged = async(req,res)=>{
        
    }
    static changePassword = async(req,res)=>{
        
    }
//     static userRegistration = async(req,res)=>{
        
//     }
}


export default userController
