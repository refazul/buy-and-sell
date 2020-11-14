import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  { path: 'listings', component: ListingPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
