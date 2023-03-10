module.exports = class Data1674748498692 {
    name = 'Data1674748498692'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "hash" text NOT NULL, "contract" text, "block_id" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`CREATE INDEX "IDX_c0e1460f3c9eee975fee81002d" ON "transaction" ("block_id") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE TABLE "new_gravatar_event" ("id" character varying NOT NULL, "name" text NOT NULL, "id0" numeric NOT NULL, "owner" text NOT NULL, "display_name" text NOT NULL, "image_url" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_cba2f4f81ddaf59577534e90270" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f777f9574caccff74e502179c5" ON "new_gravatar_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_39c89369632da3da98b0825aa7" ON "new_gravatar_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_6e1b6e173ac8e55be8b074c0d8" ON "new_gravatar_event" ("name") `)
        await db.query(`CREATE TABLE "updated_gravatar_event" ("id" character varying NOT NULL, "name" text NOT NULL, "id0" numeric NOT NULL, "owner" text NOT NULL, "display_name" text NOT NULL, "image_url" text NOT NULL, "block_id" character varying, "transaction_id" character varying, CONSTRAINT "PK_75d94288d8f4c55ae2ce0c0328c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8988ea808e0d1af635e50b5253" ON "updated_gravatar_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_59e53fe08a620d59a2837a072d" ON "updated_gravatar_event" ("transaction_id") `)
        await db.query(`CREATE INDEX "IDX_e40b718aa9d3ebd152bc415046" ON "updated_gravatar_event" ("name") `)
        await db.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "new_gravatar_event" ADD CONSTRAINT "FK_f777f9574caccff74e502179c55" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "new_gravatar_event" ADD CONSTRAINT "FK_39c89369632da3da98b0825aa70" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "updated_gravatar_event" ADD CONSTRAINT "FK_8988ea808e0d1af635e50b5253c" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "updated_gravatar_event" ADD CONSTRAINT "FK_59e53fe08a620d59a2837a072d4" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`DROP INDEX "public"."IDX_c0e1460f3c9eee975fee81002d"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP TABLE "new_gravatar_event"`)
        await db.query(`DROP INDEX "public"."IDX_f777f9574caccff74e502179c5"`)
        await db.query(`DROP INDEX "public"."IDX_39c89369632da3da98b0825aa7"`)
        await db.query(`DROP INDEX "public"."IDX_6e1b6e173ac8e55be8b074c0d8"`)
        await db.query(`DROP TABLE "updated_gravatar_event"`)
        await db.query(`DROP INDEX "public"."IDX_8988ea808e0d1af635e50b5253"`)
        await db.query(`DROP INDEX "public"."IDX_59e53fe08a620d59a2837a072d"`)
        await db.query(`DROP INDEX "public"."IDX_e40b718aa9d3ebd152bc415046"`)
        await db.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_c0e1460f3c9eee975fee81002dc"`)
        await db.query(`ALTER TABLE "new_gravatar_event" DROP CONSTRAINT "FK_f777f9574caccff74e502179c55"`)
        await db.query(`ALTER TABLE "new_gravatar_event" DROP CONSTRAINT "FK_39c89369632da3da98b0825aa70"`)
        await db.query(`ALTER TABLE "updated_gravatar_event" DROP CONSTRAINT "FK_8988ea808e0d1af635e50b5253c"`)
        await db.query(`ALTER TABLE "updated_gravatar_event" DROP CONSTRAINT "FK_59e53fe08a620d59a2837a072d4"`)
    }
}
