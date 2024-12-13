import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})

export class ContainerComponent implements OnInit {
  constructor() {}

  disableBtn: boolean = false;
  // name: string = '';
  addToCart: number = 0;

  ngOnInit(): void {
  }
}
