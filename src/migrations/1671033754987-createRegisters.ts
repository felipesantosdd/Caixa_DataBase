import { MigrationInterface, QueryRunner } from "typeorm";

export class createRegisters1671033754987 implements MigrationInterface {
    name = 'createRegisters1671033754987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cash_registers" ("id" SERIAL NOT NULL, "description" character varying(100) NOT NULL, "date" TIMESTAMP NOT NULL, "value" double precision NOT NULL, "type" character varying(50) NOT NULL, "payment" character varying(50) NOT NULL, CONSTRAINT "PK_c1cc711056395d079d8f041ce34" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cash_registers"`);
    }

}
