import { ApiModelProperty } from '@nestjs/swagger';
export class ListAllEntitiesDto{
    @ApiModelProperty()
    limit:number;
    @ApiModelProperty()
    page:number;
}
