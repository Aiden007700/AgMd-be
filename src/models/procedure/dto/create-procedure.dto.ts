import { IsString } from "class-validator";

export class CreateProcedureDto {
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsString()
    type: string;

    @IsString()
    typeAlt: string;
}
