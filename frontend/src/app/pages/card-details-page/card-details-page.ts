import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product';
import { Product } from '../../types/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../enviroments/enviroment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-details-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-details-page.html',
  styleUrl: './card-details-page.scss',
})
export class CardDetailsPage {
  readonly env = environment;

  productDetails: Product | null = null;
  sizeMultiplier: number = 1;
  protectionEnabled: number = 0;

  date = new Date();
  deliveryDate: Date = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe((product: Product) => {
        this.productDetails = product;
      });
    }
  }

  getPriceBySize(size: 's' | 'm' | 'l') {
    if (size === 's') {
      this.sizeMultiplier = 1;
    } else if (size === 'm') {
      this.sizeMultiplier = 1.5;
    } else if (size === 'l') {
      this.sizeMultiplier = 2;
    }
  }

  toggleProtection() {
    this.protectionEnabled = this.protectionEnabled === 0 ? 1.19 : 0;
  }
}
