import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1741175931655 implements MigrationInterface {
    name = 'NewMigration1741175931655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`CategoryId\` int NOT NULL AUTO_INCREMENT, \`CategoryName\` varchar(255) NOT NULL, \`Description\` text NOT NULL, \`IsActive\` tinyint NOT NULL DEFAULT 1, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`CategoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`ProductId\` int NOT NULL AUTO_INCREMENT, \`ProductName\` varchar(255) NOT NULL, \`Description\` varchar(255) NOT NULL, \`Price\` decimal(10,2) NOT NULL, \`StockQuantity\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`CategoryId\` int NULL, PRIMARY KEY (\`ProductId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_c97da6e0efe2dc5b13a5668a6a6\` FOREIGN KEY (\`CategoryId\`) REFERENCES \`category\`(\`CategoryId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_c97da6e0efe2dc5b13a5668a6a6\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
