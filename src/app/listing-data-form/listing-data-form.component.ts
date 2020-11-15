import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent {
  @Input() buttonText = '';
  
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = 0;

  @Output() onSubmit = new EventEmitter<Listing>();

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.currentName,
      description: this.currentDescription,
      price: this.currentPrice,
      views: 0
    });
  }
}
