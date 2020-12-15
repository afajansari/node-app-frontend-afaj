import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'lisitngs',
  pathMatch: 'Full'
},
{
  path: 'listings',
  loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
