import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MarketOfferEntity } from './market-offer.entity';

@Entity('assets')
export class AssetEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => MarketOfferEntity, (offer) => offer.asset)
    offers: MarketOfferEntity[];
}
