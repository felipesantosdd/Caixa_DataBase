import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1677779406809 implements MigrationInterface {
    name = 'CreateUsers1677779406809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD CONSTRAINT "FK_d5b6c8acd2719448eb849079996" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP CONSTRAINT "FK_d5b6c8acd2719448eb849079996"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
