import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})

export class ProductListComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.calculateDiscountedPrices();
  }

  product: any = [
    {
      title: 'playstation 3',
      storage: 1000,
      model: 'fat',
      color: 'black',
      price: 400,
      discont: 0.1,
      itemWithDiscont: 0,
    },
  ];

  calculateDiscountedPrices() {
    this.product.forEach((item: any) => {
      const discontedPrice = item.price - (item.price * item.discont);
      console.log(discontedPrice);
      item.itemWithDiscont = discontedPrice;
    });
  }

  getDiscontedPrice(item: any) {
    if (item && item.price && item.discont) {
      const discontedPrice = item.price - (item.price * item.discont);
      return discontedPrice;
    }
    return null;
  }
}
