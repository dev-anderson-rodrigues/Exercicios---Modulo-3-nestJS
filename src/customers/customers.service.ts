import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomersDto } from './Dtos/customersDto';
import { UpdateCustomersDto } from './Dtos/update-customersDto';

@Injectable()
export class CustomerService {
  private customersDb = [];
  findAll() {
    return 'Hello arnia.';
  }
  findAllcustomers(age) {
    return this.customersDb.filter((item) => item.age === age);
  }
  findById(id: number) {
    try {

      const customerId = this.customersDb.find((data) => data.id === id);

      if (!customerId) {
        throw new NotFoundException(`A car with this id:${id} not found.`);
      }
      return customerId;
    } catch (error) {
      console.log(error);

      throw new HttpException(error.message, error.status);
    }

  }
  create(payload: CreateCustomersDto) {
    try {
      
      const customersCreated = { id: new Date().getTime(), ...payload };
      
      this.customersDb.push(customersCreated);
      
      return customersCreated;
    } catch (error) {
      console.log(error);
      
      throw new HttpException(error.message, error.status);
    }
  }
  update(id: number, payload: UpdateCustomersDto) {
    try {
      const getCustomers = this.findById(id);

      return Object.assign(getCustomers, payload);
    } catch (error) {
      console.log(error);

      throw new HttpException(error.message, error.status);
    }
  }
  

};