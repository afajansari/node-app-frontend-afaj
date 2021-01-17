import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { AddListingComponent } from './add-listing/add-listing.component';


const routes: Routes = [{
  path: '',
  component: AllListingComponent
},
{
  path: 'add-listing',
  component: AddListingComponent
},
{
  path: ':id',
  component: ListingDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
