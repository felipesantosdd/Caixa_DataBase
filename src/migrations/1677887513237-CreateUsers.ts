import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1677887513237 implements MigrationInterface {
    name = 'CreateUsers1677887513237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(100) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cash_registers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(100) NOT NULL, "date" TIMESTAMP NOT NULL, "value" double precision NOT NULL, "type" character varying(50) NOT NULL, "payment" character varying(50) NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_c1cc711056395d079d8f041ce34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cash_registers" ADD CONSTRAINT "FK_f860498b8094442a69ca06f6ee2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cash_registers" DROP CONSTRAINT "FK_f860498b8094442a69ca06f6ee2"`);
        await queryRunner.query(`DROP TABLE "cash_registers"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
