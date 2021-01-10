import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    AddBookingComponent,
    UpdateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
