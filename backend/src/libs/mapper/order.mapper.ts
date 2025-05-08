import { OrderDto } from 'src/dto/favorites.dto';
import { OrderEntity } from 'src/models/order.entity';
import { ProductEntity } from 'src/models/product.entity';

export class MapperOrder {
  static toDto(e: OrderEntity, p: ProductEntity[]): OrderDto {
    return {
      id: e.id,
      user_id: e.user_id,
      values: e.values,
      products: p.map((p) => ({
        id: p.id,
        discount: p.discount,
        price: p.price,
        title: p.title,
      })),
    };
  }

  static toDtos(e: OrderEntity[], mapProducts: Map<string, ProductEntity>) {
    return e.map((item) => {
      const products = item.product_ids.map((p) => mapProducts.get(p));
      return MapperOrder.toDto(item, products);
    });
  }
}
