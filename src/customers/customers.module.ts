import { Module } from '@nestjs/common';

import { CustomersController } from './customers.controller';
import { CustomerService } from './customers.service';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [CustomerService],
})
export class CustomersModule {}
