import { Controller, Get, Param } from '@nestjs/common';
import { PastryService } from '../services/pastry.service';

@Controller('pastries')
export class PastryController {
    constructor(private readonly pastryService: PastryService) {}

    @Get(':name')
    getPastry(@Param('name') name: string) {
        return this.pastryService.getPastry(name);
    }

    @Get()
    listPastries(@Param('size') size: string) {
        return this.pastryService.listPastries(size);
    }
}
