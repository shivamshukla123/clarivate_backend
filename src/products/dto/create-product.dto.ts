import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Product } from "../entities/product.entity";
import { PartialType } from "@nestjs/mapped-types";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    ProductName: string;

    @IsNotEmpty()
    @IsString()
    Description: string;

    @IsNotEmpty()
    @IsNumber()
    Price: number;

    @IsNotEmpty()
    @IsNumber()
    StockQuantity: number;

    @IsNotEmpty()
    @IsNumber()
    CategoryId: number;
}
