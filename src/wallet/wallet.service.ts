import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletEntity } from 'src/common/entities/wallet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(WalletEntity)
        private readonly walletRepository: Repository<WalletEntity>,
    ) {}
}
