import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUserIdRelation1677862980810 implements MigrationInterface {
    name = 'updateUserIdRelation1677862980810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP CONSTRAINT "FK_d5b6c8acd2719448eb849079996"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD CONSTRAINT "FK_f860498b8094442a69ca06f6ee2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP CONSTRAINT "FK_f860498b8094442a69ca06f6ee2"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cash_registers" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD CONSTRAINT "FK_d5b6c8acd2719448eb849079996" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
