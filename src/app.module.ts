import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { OrderController } from './order/controllers/order.controller';
import { PastryModule } from './pastry/pastry.module';

@Module({
  imports: [OrderModule, PastryModule],
  controllers: [AppController, OrderController],
  providers: [AppService],
})
export class AppModule {}
