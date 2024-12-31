import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})

export class ContainerComponent implements OnInit {
  constructor() {}

  disableBtn: boolean = false;
  searchText: string = "";
  addToCart: number = 0;

  isProductDetailOpen: boolean = false;

  ngOnInit(): void {
  }

  setSearchText(value: string ) {
    this.searchText = value;
  }

  onOpenProductDetail() {
    this.isProductDetailOpen = !this.isProductDetailOpen;
  }
}
