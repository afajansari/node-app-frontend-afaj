import { Component, OnInit } from '@angular/core';
import { ListingService } from '../service/listing.service';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.scss']
})
export class AllListingComponent implements OnInit {
  listings$: Observable<Listing[]> | undefined;

  constructor(private listingService: ListingService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.listings$ = this.listingService.getListings();
  }

}
