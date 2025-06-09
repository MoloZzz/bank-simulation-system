import { Module } from '@nestjs/common';
import { MarketOfferService } from './market-offer.service';
import { MarketOfferEntity } from 'src/common/entities/market-offer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([MarketOfferEntity])],
    providers: [MarketOfferService],
})
export class MarketOfferModule {}
