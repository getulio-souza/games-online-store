import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreSingletonService } from '../../../../../services/singleton/store-singleton.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  constructor(private storeSingletonService: StoreSingletonService){}
  @Output() openProductDetail = new EventEmitter<any>();
  productDetailData: any;
  features: string[] = [];
  ngOnInit(): void {
    console.log(this.storeSingletonService.selectProduct)

    this.productDetailData = this.storeSingletonService.selectProduct;
    this.features = this.storeSingletonService.selectProduct.features;

  }

  onCloseProductDetailCard() {
    console.log('emitindo evento para fechar o card de detalhes do produto')
    this.openProductDetail.emit();
  }
}
