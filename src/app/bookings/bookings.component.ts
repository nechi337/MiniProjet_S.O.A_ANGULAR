import { Component, OnInit } from '@angular/core';
import {Booking} from '../model/booking.model';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute , Router} from '@angular/router';




@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
})
export class BookingsComponent implements OnInit {
  bookings:Booking[];

  constructor(private BookingService: BookingService,
    private router :Router,) { 
    //this.bookings=BookingService.listeBookings();
  }

  ngOnInit(): void {
    this.BookingService.listeBookings().subscribe(prods => {
      console.log(prods);
      this.bookings = prods;
      });
  }

  /*supprimerBooking(b: Booking)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)

    this.BookingService.supprimerBooking(b);
  }*/

  supprimerBooking(p: Booking)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.BookingService.supprimerBooking(p.idBooking).subscribe(() => {
    console.log("Réservation supprimé");
    this.SuprimerBookingDuTableau(p);
    });
    }


    SuprimerBookingDuTableau(prod : Booking) {
      this.bookings.forEach((cur, index) => {
      if(prod.idBooking=== cur.idBooking) {
      this.bookings.splice(index, 1);
      }
      });
      }

}
