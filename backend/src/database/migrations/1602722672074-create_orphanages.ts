import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602722672074 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //REALIZAR ALTERACOES
    //CRIAR TABELA, CRIAR CAMPO, DELETAR CAMPO E ETC
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name: 'open_on_weekends',
          type: 'bolean',
          default: false
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO NO METODO UP
    await queryRunner.dropTable('orphanages');
  }

}
