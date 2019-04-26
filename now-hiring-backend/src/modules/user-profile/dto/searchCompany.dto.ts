import { ApiModelProperty } from '@nestjs/swagger';
// TODO
export class SearchCompanyDto{
    @ApiModelProperty()
    limit:number;
    @ApiModelProperty()
    page:number;
}
