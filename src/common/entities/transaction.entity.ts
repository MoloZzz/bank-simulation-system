import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { WalletEntity } from './wallet.entity';

@Entity('transactions')
export class TransactionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => WalletEntity, { nullable: false })
    fromWallet: WalletEntity;

    @ManyToOne(() => WalletEntity, { nullable: false })
    toWallet: WalletEntity;

    @Column({ type: 'numeric', precision: 18, scale: 2 })
    amount: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'enum', enum: ['pending', 'completed', 'failed'], default: 'pending' })
    status: 'pending' | 'completed' | 'failed';

    @Column({ type: 'enum', enum: ['transfer', 'purchase', 'reward'], default: 'transfer' })
    type: 'transfer' | 'purchase' | 'reward';

    @Column({ type: 'timestamp', nullable: true })
    executedAt: Date | null;

    @CreateDateColumn()
    createdAt: Date;
}
