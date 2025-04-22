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
  @Output() selectAll: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectAvaliable: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectNotAvaliable: EventEmitter<string> = new EventEmitter<string>();

  onSelectAvalibleProducts(){
    console.log('selecionou todos')
    this.selectAvaliable.emit();
  }

  onSelectAllProducts() {
    console.log('selecionou disponiveis')
    this.selectAll.emit();
  }

  onSelecteNotAvaliable() {
    console.log('selecionou nao disponiveis')
    this.selectNotAvaliable.emit();
  }
}
