import { PartialType } from "@nestjs/mapped-types";

import { CreateCustomersDto} from "./customersDto";

export class UpdateCustomersDto extends PartialType(CreateCustomersDto) {}