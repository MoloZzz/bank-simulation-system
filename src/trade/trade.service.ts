import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TradeEntity } from 'src/common/entities/trade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TradeService {
    constructor(
        @InjectRepository(TradeEntity)
        private readonly tradeRepository: Repository<TradeEntity>,
    ) {}
}
