import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from '../config/env.validation';
import { PostgresqlModule } from './libs/postgresql/postgresql.module';
import { entities } from './common/entities';
import { migrations } from './common/migrations';
import { AssetModule } from './asset/asset.module';
import { UserModule } from './user/user.module';
import { MarketOfferModule } from './market-offer/market-offer.module';
import { TradeModule } from './trade/trade.module';
import { TransactionModule } from './transaction/transaction.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`.env`],
            validationSchema,
        }),
        PostgresqlModule.register(entities, migrations, []),
        AssetModule,
        UserModule,
        MarketOfferModule,
        TradeModule,
        TransactionModule,
        WalletModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
