import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { MarketOfferEntity } from './market-offer.entity';
import { TransactionEntity } from './transaction.entity';
import { UserEntity } from './user.entity';

@Entity('trades')
export class TradeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => MarketOfferEntity)
    offer: MarketOfferEntity;

    @ManyToOne(() => UserEntity)
    buyer: UserEntity;

    @ManyToOne(() => UserEntity)
    seller: UserEntity;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'numeric' })
    price: number;

    @OneToOne(() => TransactionEntity)
    @JoinColumn()
    paymentTransaction: TransactionEntity;

    @CreateDateColumn()
    createdAt: Date;
}
