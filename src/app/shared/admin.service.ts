import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private firebase: AngularFireDatabase) { }
  hotelList: AngularFireList<any>; //AngularFireList is like a datatype and interface
  form = new FormGroup({
     $key: new FormControl(null),
     name: new FormControl('', Validators.required),
     city: new FormControl('', Validators.required),
     stars: new FormControl(3.5, [Validators.required, Validators.min(1), Validators.max(5), Validators.pattern("^[0-9]+(.[0-9]{0,16})?$")]), //more than 1 Validator has to be inside array
     image: new FormControl('assets/img/', Validators.required),
     description: new FormControl('', Validators.maxLength(64))
  });
  getHotels(){
     this.hotelList = this.firebase.list('hotels');
     return this.hotelList.snapshotChanges();
  }
  insertHotel(hotel){
    this.hotelList.push({
    	name: hotel.name,
    	city: hotel.city,
    	stars: Number(hotel.stars),
    	image:hotel.image,
      description:hotel.description
  	});
  }
  populateForm(hotel){
    this.form.setValue(hotel);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  updateHotel(hotel){
    this.hotelList.update(hotel.$key,{
        name: hotel.name,
        city: hotel.city,
        stars: Number(hotel.stars),
        image:hotel.image,
        description:hotel.description
    });
  }
  deleteHotel($key: string){
    this.hotelList.remove($key);
  }
}
