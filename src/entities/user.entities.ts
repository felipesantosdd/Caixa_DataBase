import { hashSync } from 'bcryptjs';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Registers } from './registers.entities';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    userName: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 120 })
    password: string;

    @OneToMany(() => Registers, registers => registers.user)
    registers: Registers[];

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}

export { User }

