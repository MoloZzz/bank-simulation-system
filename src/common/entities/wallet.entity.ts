import { PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, Entity } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { UserEntity } from './user.entity';

@Entity('wallets')
export class WalletEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserEntity, (user) => user.wallet)
    user: UserEntity;

    @Column({ type: 'numeric', default: 0 })
    balance: number;

    @OneToMany(() => TransactionEntity, (tx) => tx.fromWallet)
    outgoingTransactions: TransactionEntity[];

    @OneToMany(() => TransactionEntity, (tx) => tx.toWallet)
    incomingTransactions: TransactionEntity[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
