import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

  ) { }
  async create(createProductDto: CreateProductDto) {

    const category = await this.categoryRepository.findOne({ where: { CategoryId: createProductDto.CategoryId } });

    if (!category) {
      throw new Error('Category not found');
    }

    const product = this.productRepository.create({
      ...createProductDto,
      category,
    });

    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find({ relations: ['category'] });
  }

}
