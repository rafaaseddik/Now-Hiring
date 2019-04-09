import {SuccessResponseObject} from "../../models/success.response.model";
import {User} from "../../../user-profile/models/User.model";
import {USER_TYPE} from "../../../user-profile/schemas/user.schema";

export class AuthResponseObject extends SuccessResponseObject{
    data:{
        user:User,
        token:string,
        userType : USER_TYPE;
    } = {user:null,token:null,userType:USER_TYPE.DEFAULT};

    constructor(status,user,token,userType){
        super(status);
        this.data.user = user;
        this.data.token = token;
        this.data.userType = userType;
    }
}
