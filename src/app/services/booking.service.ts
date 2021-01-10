import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  apiURL: string = 'http://localhost:8080/booking/api';
  bookings:Booking[];
  //booking:Booking;
  constructor(private http : HttpClient) {
   /* this.bookings=[
      {idBooking:1,nomClient:'hamza nechi',nombre:2,dateReserv:new Date("12/09/2020")},
      {idBooking:2,nomClient:'wajdi messadi',nombre:4,dateReserv:new Date("12/09/2020")},
      {idBooking:3,nomClient:'ghaith zahraoui',nombre:3,dateReserv:new Date("12/09/2020")},
      {idBooking:4,nomClient:'wassim jaziri',nombre:2,dateReserv:new Date("12/09/2020")},
    ];*/
   }

  /* listeBookings():Booking[]{
     return this.bookings;
   }*/

   listeBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this.apiURL);
    }

  /* ajouterBooking( book: Booking){
    this.bookings.push(book);
    }*/
    ajouterBooking( prod: Booking):Observable<Booking>{
      return this.http.post<Booking>(this.apiURL, prod, httpOptions);
      }
      

   /* supprimerBooking(b: Booking){
      //supprimer le produit prod du tableau produits
      const index = this.bookings.indexOf(b, 0);
      if (index > -1) {
      this.bookings.splice(index, 1);
      }
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); 
      }*/


      supprimerBooking(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

      /*consulterBooking(id:number): Booking{
        this.booking = this.bookings.find(p => p.idBooking == id);
        return this.booking;
        }*/

        consulterBooking(id: number): Observable<Booking> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Booking>(url);
          }
          

        /*updateBooking(p:Booking)
        {
        // console.log(p);
        //this.supprimerBooking(p);
        //this.ajouterBooking(p);
        //this.trierBookings();

        }*/

        updateBooking(prod :Booking) : Observable<Booking>
        {
        return this.http.put<Booking>(this.apiURL, prod, httpOptions);
        }



        trierBookings(){
          this.bookings = this.bookings.sort((n1,n2) => {
            if (n1.idBooking > n2.idBooking) {
            return 1;
            }
            if (n1.idBooking < n2.idBooking) {
            return -1;
            }
            return 0;
            });
            
        }
}
