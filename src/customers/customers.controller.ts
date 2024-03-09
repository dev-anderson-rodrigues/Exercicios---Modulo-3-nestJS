import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CustomerService } from './customers.service';
import { CreateCustomersDto } from './Dtos/customersDto';
import { agent } from 'supertest';
import { UpdateCustomersDto } from './Dtos/update-customersDto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomerService) { }

  @Get('hello')
  findAll() {
    return this.customerService.findAll();
  }
  @Get('')
  findAllcustomers(age: string) {

    return this.customerService.findAllcustomers(age)

  }

  @Get(':id')
  getcustomers(@Param('id', ParseIntPipe) id: number) {

    return this.customerService.findById(id)

  }

  @Post()
  create(@Body() payload: CreateCustomersDto) {
    return this.customerService.create(payload);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() payload: UpdateCustomersDto) {
    return this.customerService.update(id, payload);
  }
  @Delete(':id')
  deleteCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.deleteById(id);
  }
}