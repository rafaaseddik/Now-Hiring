import {ResponseObject} from "./response.model";

export class ErrorResponseObject extends ResponseObject{
    status:number;
    message:string;
    constructor(status,message){
        super();
        this.status = status;
        this.message = message;
    }
}
