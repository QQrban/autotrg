import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product';
import { Product } from '../../types/product';
import { environment } from '../../enviroments/enviroment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured',
  imports: [CommonModule],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
})
export class Featured {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  enviroment = environment;

  ngOnInit() {
    this.productService
      .getProductsByCategory(1)
      .subscribe((products: Product[]) => {
        this.featuredProducts = products;
      });
  }
}
