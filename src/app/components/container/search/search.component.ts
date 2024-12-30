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

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = '';
  showtext: boolean = true;
  enableSearchBtn: boolean = true;

  updateSearchText(inputElement: HTMLInputElement) {
    console.log(inputElement.value)
    this.searchText = inputElement.value;
    // this.searchText = event.target.value;
    this.searchTextChanged.emit(this.searchText)

  }

  // onSearchTextChanged() {
  //   // this.searchTextChanged.emit(this.searchText)
  // }
}
