import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1749474097811 implements MigrationInterface {
    name = 'InitDb1749474097811';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transactions_status_enum" AS ENUM('pending', 'completed', 'failed')`);
        await queryRunner.query(`CREATE TYPE "public"."transactions_type_enum" AS ENUM('transfer', 'purchase', 'reward')`);
        await queryRunner.query(
            `CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" numeric(18,2) NOT NULL, "description" text, "status" "public"."transactions_status_enum" NOT NULL DEFAULT 'pending', "type" "public"."transactions_type_enum" NOT NULL DEFAULT 'transfer', "executed_at" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "from_wallet_id" uuid NOT NULL, "to_wallet_id" uuid NOT NULL, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "wallets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "balance" numeric NOT NULL DEFAULT '0', "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "PK_8402e5df5a30a229380e83e4f7e" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password_hash" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "last_login" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "wallet_id" uuid, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_67abb81dc33e75d1743323fd5d" UNIQUE ("wallet_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "assets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, CONSTRAINT "UQ_013e7b742fb1b5b2e6602446d8a" UNIQUE ("name"), CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(`CREATE TYPE "public"."market_offers_type_enum" AS ENUM('buy', 'sell')`);
        await queryRunner.query(
            `CREATE TABLE "market_offers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."market_offers_type_enum" NOT NULL, "price" numeric NOT NULL, "quantity" integer NOT NULL, "remaining_quantity" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "expires_at" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "creator_id" uuid, "asset_id" uuid, CONSTRAINT "PK_2e0408d62c725b6c6d7e99ea5b2" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "trades" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "offer_id" uuid, "buyer_id" uuid, "seller_id" uuid, "payment_transaction_id" uuid, CONSTRAINT "REL_4ee64fcae6f6a82da84ad376c7" UNIQUE ("payment_transaction_id"), CONSTRAINT "PK_c6d7c36a837411ba5194dc58595" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "transactions" ADD CONSTRAINT "FK_c337cc8fd8b43b3e8414f6464ec" FOREIGN KEY ("from_wallet_id") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "transactions" ADD CONSTRAINT "FK_0ead82990d0099eecec1fa10a29" FOREIGN KEY ("to_wallet_id") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "wallets" ADD CONSTRAINT "FK_92558c08091598f7a4439586cda" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD CONSTRAINT "FK_67abb81dc33e75d1743323fd5db" FOREIGN KEY ("wallet_id") REFERENCES "wallets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "market_offers" ADD CONSTRAINT "FK_6274ca0a9477b224b61c6556ce7" FOREIGN KEY ("creator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "market_offers" ADD CONSTRAINT "FK_b164beeaca84e7f18e2dd33003d" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "trades" ADD CONSTRAINT "FK_62838ca4175d11ac4b0b80dbe29" FOREIGN KEY ("offer_id") REFERENCES "market_offers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "trades" ADD CONSTRAINT "FK_1e68f3bba66c20e3928690113a8" FOREIGN KEY ("buyer_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "trades" ADD CONSTRAINT "FK_415ee496a01546f09ebd01d0bca" FOREIGN KEY ("seller_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "trades" ADD CONSTRAINT "FK_4ee64fcae6f6a82da84ad376c76" FOREIGN KEY ("payment_transaction_id") REFERENCES "transactions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trades" DROP CONSTRAINT "FK_4ee64fcae6f6a82da84ad376c76"`);
        await queryRunner.query(`ALTER TABLE "trades" DROP CONSTRAINT "FK_415ee496a01546f09ebd01d0bca"`);
        await queryRunner.query(`ALTER TABLE "trades" DROP CONSTRAINT "FK_1e68f3bba66c20e3928690113a8"`);
        await queryRunner.query(`ALTER TABLE "trades" DROP CONSTRAINT "FK_62838ca4175d11ac4b0b80dbe29"`);
        await queryRunner.query(`ALTER TABLE "market_offers" DROP CONSTRAINT "FK_b164beeaca84e7f18e2dd33003d"`);
        await queryRunner.query(`ALTER TABLE "market_offers" DROP CONSTRAINT "FK_6274ca0a9477b224b61c6556ce7"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_67abb81dc33e75d1743323fd5db"`);
        await queryRunner.query(`ALTER TABLE "wallets" DROP CONSTRAINT "FK_92558c08091598f7a4439586cda"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_0ead82990d0099eecec1fa10a29"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_c337cc8fd8b43b3e8414f6464ec"`);
        await queryRunner.query(`DROP TABLE "trades"`);
        await queryRunner.query(`DROP TABLE "market_offers"`);
        await queryRunner.query(`DROP TYPE "public"."market_offers_type_enum"`);
        await queryRunner.query(`DROP TABLE "assets"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "wallets"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TYPE "public"."transactions_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."transactions_status_enum"`);
    }
}
