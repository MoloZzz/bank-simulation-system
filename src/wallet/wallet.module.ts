import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletEntity } from 'src/common/entities/wallet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([WalletEntity])],
    providers: [WalletService],
})
export class WalletModule {}
