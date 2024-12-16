import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  addToCart: number = 0;

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    //if the products i wanna add to the cart are less than the products i have in stock, i will be able to add more items to my cart
    // if(this.addToCart < this.videogame.inStock){
      this.addToCart++;
    // }
  }
}
