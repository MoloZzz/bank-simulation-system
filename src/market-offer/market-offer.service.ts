import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketOfferEntity } from 'src/common/entities/market-offer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarketOfferService {
    constructor(
        @InjectRepository(MarketOfferEntity)
        private readonly marketOfferRepository: Repository<MarketOfferEntity>,
    ) {}
}
