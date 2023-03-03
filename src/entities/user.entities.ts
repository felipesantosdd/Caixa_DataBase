import { hashSync } from 'bcryptjs';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn, OneToMany, Repository } from "typeorm";
import { Registers } from './registers.entities';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @OneToMany(() => Registers, registers => registers.user)
    registers: Registers[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        const saltRounds = 10;
        this.password = await hashSync(this.password, saltRounds);
    }
}

export { User };
