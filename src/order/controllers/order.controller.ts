import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderInterface } from '../interfaces/order.interface';

@Controller('api/orders')
export class OrderController {
    constructor(private readonly service: OrderService) {}

    @Post()
    async order(@Body() info: OrderInfo): Promise<OrderInterface | UnavailableProductInterface> {
    try {
      const createdOrder = await this.service.placeOrder(info);
      return createdOrder;
    } catch (upe) {
      if (upe instanceof UnavailablePastryException) {
        throw new HttpException(
          new UnavailableProduct(upe.getProduct(), upe.getMessage()),
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      } else {
        throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
