import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, Max, min, Min } from "class-validator";

export class CreateCustomersDto {
  @ApiProperty({
    description:'Primeiro Nome, o nome usado será para cadastro no banco de dados',
    example:'Anderson'
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description:'Sobrenome, o sobrenome usado será para cadastro no banco de dados',
    example:'Rodrigues'
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    description:'Idade, a idade será usada para cadastro no banco de dados',
    example:'29'
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(18)
  @Max(100)
  age: number;
}
