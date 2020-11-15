import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText = '';
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = 0;

  @Output() onSubmit = new EventEmitter<Listing>();

  name: string = '';
  description: string = '';
  price: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0
    });
  }
}
