import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SearchComponent } from "./search/search.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})

export class ProductListComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  disableBtn: boolean = false;
  // name: string = '';
  addToCart: number = 0;

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
      inStock: 10,
      imageProduct: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sony-PlayStation-4-PS4-wDualShock-4.jpg/1200px-Sony-PlayStation-4-PS4-wDualShock-4.jpg'
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

  // onNameChange(event: any){
  //   console.log(event.target.value)
  //   this.name = event.target.value;
  // }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    //if the products i wanna add to the cart are less than the products i have in stock, i will be able to add more items to my cart
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }

}
