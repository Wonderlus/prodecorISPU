import { ProductDto } from 'src/dto/product.dto';
import { ProductQueryDto } from 'src/dto/product.query.dto';
import { FavoritesEntity } from 'src/models/favorites.entity';
import { ImageEntity } from 'src/models/image.entity';
import { ProductEntity } from 'src/models/product.entity';

export class MapperProduct {
  static toDto(
    p: ProductEntity,
    mapFavorites?: Map<string, FavoritesEntity>,
    image_ids?: string[],
  ): ProductDto {
    const favoites = mapFavorites.get(p.id);
    return {
      id: p.id,
      title: p.title,
      description: p.description,
      discount: p.discount,
      price: p.price,
      type: p.type,
      favorites_id: favoites ? favoites.id : null,
      image_ids,
    };
  }

  static toDtos(
    p: ProductQueryDto[],
    mapFavorites?: Map<string, FavoritesEntity>,
    mapImages?: Map<string, ImageEntity[]>,
  ): ProductDto[] {
    return p.map((item) => {
      const image = mapImages.get(item.product_id);

      let image_ids: string[] = [];

      if (image) image_ids = image.map((item) => item.image);

      return this.toDto(
        {
          id: item.product_id,
          title: item.product_title,
          description: item.product_description,
          discount: item.product_discount,
          price: item.product_price,
          type: item.product_type,
        },
        mapFavorites,
        image_ids,
      );
    });
  }
}
