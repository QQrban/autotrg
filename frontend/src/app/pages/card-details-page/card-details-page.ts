import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product';
import { Product } from '../../types/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details-page',
  imports: [CommonModule],
  templateUrl: './card-details-page.html',
  styleUrl: './card-details-page.scss',
})
export class CardDetailsPage {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  productDetails: Product[] = [];

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe((product: Product[]) => {
        this.productDetails = product;
        console.log(product);
      });
    }
  }
}
