import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('cash_registers')
class Registers {

    @PrimaryGeneratedColumn()
    id: number

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
}

export { Registers }