import { Module } from '@nestjs/common';
import { PastryController } from './controllers/pastry.controller';
import { PastryService } from './services/pastry.service';

@Module({
  controllers: [PastryController],
  providers: [PastryService]
})
export class PastryModule {}
