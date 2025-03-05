import { IsNotEmpty, IsString } from "class-validator";
import { Category } from "../entities/category.entity";
import { PartialType } from "@nestjs/mapped-types";

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    CategoryName: string;

    @IsString()
    Description: string;

}
