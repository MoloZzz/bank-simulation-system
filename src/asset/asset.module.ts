import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetEntity } from 'src/common/entities/asset.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AssetEntity])],
    providers: [AssetService],
})
export class AssetModule {}
