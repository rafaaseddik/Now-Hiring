import {ResponseObject} from "./response.model";

export class SuccessResponseObject extends ResponseObject{
    status:number;
    data:any;
    constructor(status){
        super();
        this.status = status;
    }
}
