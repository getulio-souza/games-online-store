import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  @Output() openProductDetail = new EventEmitter<any>();

  isProductDetailOpen!: boolean;

  onOpenProductDetail() {
    this.openProductDetail.emit(this.isProductDetailOpen)
  }

}
