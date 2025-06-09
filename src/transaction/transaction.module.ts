import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from 'src/common/entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([TransactionEntity])],
    providers: [TransactionService],
})
export class TransactionModule {}
