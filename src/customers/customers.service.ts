import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomersDto } from './Dtos/customersDto';
import { UpdateCustomersDto } from './Dtos/update-customersDto';
import { Customer } from './entities/customers.entities';

@Injectable()
export class CustomerService {
  private customersDb = [];
  findAll() {
    return 'Hello arnia.';
  }
  findAllcustomers(age?: string): Customer[] {
    try{
      if (age){
       const getCustumers = this.customersDb.filter((item) => item.age === age);
        return getCustumers
      }
      
      return this.customersDb;
    }catch (error) {
      console.log(error);
      
      throw new HttpException(error.message, error.status);
    }
      
    
  }

  findById(id: number): Customer {
    try {
      
      const customerId = this.customersDb.find((data) => data.id === id);
      
      if (!customerId) {
        throw new NotFoundException(customerId.message, customerId.status);
      }
      return customerId;
    } catch (error) {
      console.log(error);
      
      throw new HttpException(error.message, error.status);
    }
    
  }
  create(payload: CreateCustomersDto): Customer {
    try {
      
      const customersCreated = { id: new Date().getTime(), ...payload };
      
      this.customersDb.push(customersCreated);
      
      return customersCreated;
    } catch (error) {
      console.log(error);
      
      throw new HttpException(error.message, error.status);
    }
  }
  update(id: number, payload: UpdateCustomersDto): Customer {
    try {
      const getCustomers = this.findById(id);
      
      return Object.assign(getCustomers, payload);
    } catch (error) {
      console.log(error);
      
      throw new HttpException(error.message, error.status);
    }
  }
  deleteById(id: number): Customer {
    const customers = this.findById(id);

    if (customers) {
      const index = this.customersDb.indexOf(customers);
      const userGet = this.customersDb.splice(index, 1);
      return customers;
    }

    return null;
  }
  
  
};