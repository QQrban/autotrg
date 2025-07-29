import { Component } from '@angular/core';
import { ProductService } from '../../services/productService/productService';
import { Product } from '../../types/product';
import { environment } from '../../enviroments/enviroment';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserType } from '../../types/user';
import { userService } from '../../services/userService/userService';

@Component({
  selector: 'app-featured',
  imports: [CommonModule],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
})
export class Featured {
  featuredProducts: Product[] = [];
  userMap: Record<number, UserType> = {};

  constructor(
    private productService: ProductService,
    private router: Router,
    private userService: userService
  ) {}

  enviroment = environment;

  ngOnInit() {
    this.productService.getProductsByCategory(1).subscribe((products) => {
      this.featuredProducts = products;

      for (let product of products) {
        if (!this.userMap[product.userId]) {
          this.userService.getUserById(product.userId).subscribe((user) => {
            console.log(user);

            this.userMap[product.userId] = user;
          });
        }
      }
    });
  }

  openDetailsPage(id: number) {
    this.router.navigate(['/cards', id]);
  }

  addToFavorite(id: number, e: Event) {
    e.stopPropagation();
  }

  openUserPage(id: number, e: Event) {
    e.stopPropagation();
  }
}
