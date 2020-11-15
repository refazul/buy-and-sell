import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  listing: Listing = { id: '', name: '', description: '', price: 0, views: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
      });
  }

  onSubmit(listing: Listing): void {
    const name = listing.name;
    const description = listing.description;
    const price = listing.price;
    this.listingsService.editListing(this.listing.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
