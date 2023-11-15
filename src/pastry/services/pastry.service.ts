import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { PastryInterface } from '../interfaces/pastry.interface';

@Injectable()
export class PastryService {

  private readonly resourceUrl: string;

  constructor(
      private readonly configService: ConfigService,
      private readonly httpService: HttpService
    ) {
    this.resourceUrl = this.configService.get<string>('pastries.baseUrl');
  }

  async getPastry(name: string): Promise<PastryInterface> {
    const response: AxiosResponse<PastryInterface> = await this.httpService.get(`${this.resourceUrl}/pastries/${name}`);
    return response.data;
  }

  async listPastries(size: string): Promise<PastryInterface[]> {
    const response: AxiosResponse<PastryInterface[]> = await this.httpService.get(`${this.resourceUrl}/pastries`, { params: { size } });
    return response.data;
  }
}
