import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { AssetEntity } from './asset.entity';

@Entity('market_offers')
export class MarketOfferEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserEntity)
    creator: UserEntity;

    @ManyToOne(() => AssetEntity, (asset) => asset.offers)
    asset: AssetEntity;

    @Column({ type: 'enum', enum: ['buy', 'sell'] })
    type: 'buy' | 'sell';

    @Column({ type: 'numeric' })
    price: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'int' })
    remainingQuantity: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', nullable: true })
    expiresAt: Date | null;

    @CreateDateColumn()
    createdAt: Date;
}
