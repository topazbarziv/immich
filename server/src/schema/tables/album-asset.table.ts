import { UpdatedAtTrigger, UpdateIdColumn } from 'src/decorators';
import { AlbumTable } from 'src/schema/tables/album.table';
import { AssetTable } from 'src/schema/tables/asset.table';
import { CreateDateColumn, ForeignKeyColumn, Table, UpdateDateColumn } from 'src/sql-tools';

@UpdatedAtTrigger('album_assets_updated_at')
@Table({ name: 'albums_assets_assets', primaryConstraintName: 'PK_c67bc36fa845fb7b18e0e398180' })
export class AlbumAssetTable {
  @ForeignKeyColumn(() => AlbumTable, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false, primary: true })
  albumsId!: string;

  @ForeignKeyColumn(() => AssetTable, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false, primary: true })
  assetsId!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @UpdateIdColumn({ indexName: 'IDX_album_assets_update_id' })
  updateId!: string;
}
