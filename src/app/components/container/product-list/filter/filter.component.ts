import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  selectedFilterButtons: string = 'all'
  //we need to specify what type of data we are going to emit which in this case is 'string'
  @Output() selectFilterOnButtonChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectFilterOnChange(){
    console.log('select btn from filter',this.selectedFilterButtons)
    this.selectFilterOnButtonChange.emit(this.selectedFilterButtons)
  }
}
