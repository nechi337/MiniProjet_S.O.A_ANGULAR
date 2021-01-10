import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{BookingsComponent} from './bookings/bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

const routes: Routes = [
  {path: "bookings" , component: BookingsComponent},
  {path:"add-booking" , component: AddBookingComponent},
  {path:"", redirectTo:"bookings" ,pathMatch:"full"},
  {path: "updateBooking/:id", component: UpdateBookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
