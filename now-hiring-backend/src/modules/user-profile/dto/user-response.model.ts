
import {USER_TYPE} from "../schemas/user.schema";
import {SuccessResponseObject} from "../../core/models/success.response.model";
import {User} from "../models/User.model";


export class UserResponseObject extends SuccessResponseObject{
    data:{
        user:User,
        userType : USER_TYPE;
    } = {user:null,userType:USER_TYPE.DEFAULT};

    constructor(status,user,userType){
        super(status);
        this.data.user = user;
        this.data.userType = userType;
    }
}
