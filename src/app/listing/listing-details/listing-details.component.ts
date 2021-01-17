import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../service/listing.service';
import { Listing } from '../model/listing';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// type ListingDetails = Readonly<{
//   id: string;
//   listing: Listing;
// }>;
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss'],
})

export class ListingDetailsComponent implements OnInit, OnDestroy {
  // listingSub$: Subscription;
  // tslint:disable-next-line: variable-name
  id: string ;
  listing: Listing;
  listingSub$: Subscription;

  showForm: boolean;

  editListingForm = new FormGroup({
    title: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    locality: new FormControl("", Validators.required),
    details: new FormControl("", Validators.required)
  })
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly listingService: ListingService,
    private router: Router
    // my_data : this.listingService.getListing(this.id)
  ) { }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    // console.log(this._id);
    // tslint:disable-next-line: no-shadowed-variable
    this.listingSub$ = this.listingService.getListing(this.id).subscribe(listing => { this.listing = listing; });
  }
  // tslint:disable-next-line: typedef
  ngOnDestroy(): void {
    this.listingSub$.unsubscribe();
  }
  showEdit(){
    this.showForm = !this.showForm;
  }
  editListing(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.editListingForm.valid) {
        this.listingService.editListing(this.editListingForm.value, this.id).subscribe(res => {
          this.editListingForm.reset();
          this.router.navigate(['listings']);
        })
    }
  }

}

