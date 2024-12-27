import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output()searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = '';
  showtext: boolean = true;
  enableSearchBtn: boolean = true;

  updateSearchText(event: any){
    this.searchText = event.target.value;
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }
}
