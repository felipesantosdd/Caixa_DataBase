import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './user.entities';

@Entity('cash_registers')
class Registers {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    description: string

    @Column()
    date: Date

    @Column({ type: 'float' })
    value: number

    @Column({ length: 50 })
    type: string

    @Column({ length: 50 })
    payment: string

    @Column({ name: "user_id" })
    userId: string;

    @ManyToOne(() => User, user => user.registers)
    @JoinColumn({ name: "user_id" })
    user: User;
}

export { Registers }