import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.model';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute , Router} from '@angular/router';



@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  newBooking=new Booking();

  constructor(private BookingService : BookingService,
    private router :Router) { }

  ngOnInit(): void {
  }

  /*addBooking(){
    this.BookingService.ajouterBooking(this.newBooking);
    }*/

    addBooking(){
      this.BookingService.ajouterBooking(this.newBooking)
      .subscribe(prod => {
      console.log(prod);
      });
      this.router.navigate(['bookings']);
      }
    

}
