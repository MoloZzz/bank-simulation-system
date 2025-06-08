import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from '../config/env.validation';
import { PostgresqlModule } from './libs/postgresql/postgresql.module';
import { entities } from './common/entities';
import { migrations } from './common/migrations';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`.env`],
            validationSchema,
        }),
        PostgresqlModule.register(entities, migrations, []),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
