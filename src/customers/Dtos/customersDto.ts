import { IsNotEmpty, IsString, IsNumber, Max } from "class-validator";

export class CreateCustomersDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  age: number;
}
