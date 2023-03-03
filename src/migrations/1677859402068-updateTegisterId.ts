import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTegisterId1677859402068 implements MigrationInterface {
    name = 'updateTegisterId1677859402068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP CONSTRAINT "PK_c1cc711056395d079d8f041ce34"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD CONSTRAINT "PK_c1cc711056395d079d8f041ce34" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP CONSTRAINT "PK_c1cc711056395d079d8f041ce34"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD CONSTRAINT "PK_c1cc711056395d079d8f041ce34" PRIMARY KEY ("id")`);
    }

}
