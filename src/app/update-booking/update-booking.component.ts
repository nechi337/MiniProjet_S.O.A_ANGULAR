import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { BookingService } from '../services/booking.service';
import { Booking } from '../model/booking.model';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styles: [
  ]
})
export class UpdateBookingComponent implements OnInit {
  currentBooking = new Booking();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private BookingService: BookingService) { }

  ngOnInit(): void {
    this.BookingService.consulterBooking(this.activatedRoute.snapshot.params.id).
 subscribe( prod =>{ this.currentBooking = prod; } ) ;

  }

  /*updateBooking()
{ //console.log(this.currentProduit);
this.BookingService.updateBooking(this.currentBooking);
this.router.navigate(['bookings']);
}*/

updateBooking() {
  this.BookingService.updateBooking(this.currentBooking).subscribe(prod => {
  this.router.navigate(['bookings']);
  },(error) => { alert("Problème lors de la modification !"); }
  );
  }
  

}
