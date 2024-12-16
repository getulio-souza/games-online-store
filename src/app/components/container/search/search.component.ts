import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText: string = '';
  showtext: boolean = true;
  enableSearchBtn: boolean = true;

  updateSearchText(event: any){
    this.searchText = event.target.value;
  }
}
