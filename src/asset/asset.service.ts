import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetEntity } from 'src/common/entities/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetService {
    constructor(
        @InjectRepository(AssetEntity)
        private readonly assetRepository: Repository<AssetEntity>,
    ) {}
}
