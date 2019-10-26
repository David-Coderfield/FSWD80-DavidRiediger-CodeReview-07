import { Component, OnInit } from '@angular/core';
import { AdminService } from "../shared/admin.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
	hotelArray =[];
  showDeletedMessage : boolean;
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
  onDelete($key){
    if(confirm("Are you sure you want to delete this record?")){
      this.AdminService.deleteHotel($key);
      this.showDeletedMessage = true;
      setTimeout(()=> this.showDeletedMessage=false , 3000)
    }
  }
  filterCondition(hotel){
    return (hotel.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) || //use || to check multiple fields
    (hotel.city.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) || 
    (hotel.description.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) ||
    (hotel.stars.toString().indexOf(parseInt(this.searchText)) != -1) //number.toString() to match searchtext:string

  }

/*  stringifyStars(n){
    var starArr=['\u2606','\u2606','\u2606','\u2606','\u2606'];
      for (let i=0; i<Math.round(n); i++) {
        starArr[i]='\u2605';
      }
      return starArr.join('');
  }*/
}
