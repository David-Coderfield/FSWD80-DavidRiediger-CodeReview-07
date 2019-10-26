import { Component, OnInit } from '@angular/core';
import { AdminService } from "../shared/admin.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  hotelArray =[];
  searchText:string = "";

  constructor(private AdminService: AdminService) { }

  ngOnInit() {
  	this.AdminService.getHotels().subscribe(
      (list) => {
        this.hotelArray = list.map( (item) => {
          return {
            $key : item.key,
            ...item.payload.val()
          }
        })
    });
  }

  filterCondition(hotel){
    return (hotel.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) || //use || to check multiple fields
    (hotel.city.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) || 
    (hotel.description.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1)
    // here you can't filter by stars (see admin-list.component.ts for that)
  }

  stringifyStars(n){
    var starArr=['\u2606','\u2606','\u2606','\u2606','\u2606'];
      for (let i=0; i<Math.round(n); i++) {
        starArr[i]='\u2605';
      }
      return starArr.join('');
  }
}
