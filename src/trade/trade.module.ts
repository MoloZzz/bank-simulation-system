import { Module } from '@nestjs/common';
import { TradeService } from './trade.service';
import { TradeEntity } from 'src/common/entities/trade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([TradeEntity])],
    providers: [TradeService],
})
export class TradeModule {}
