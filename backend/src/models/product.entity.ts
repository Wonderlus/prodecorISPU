import { ProductType } from 'src/enum/product.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('text')
  readonly title: string;

  @Column('text')
  readonly description: string;

  @Column('numeric')
  readonly price: number;

  @Column('numeric')
  readonly discount: number;

  @Column('text')
  readonly type: ProductType;
}
