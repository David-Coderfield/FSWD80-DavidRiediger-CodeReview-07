import { Component, OnInit } from '@angular/core';
import { AdminService  } from "../shared/admin.service";

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  isHidden: boolean;
	submitted: boolean;
  showSuccessMessage: boolean;
	formControls = this.AdminService.form.controls;
  constructor(private AdminService: AdminService) { } //orange can be any name

  ngOnInit() {
    this.isHidden = true;
  }

	onSubmit(){
  	this.submitted = true;
  	if(this.AdminService.form.valid){
      if(this.AdminService.form.get("$key").value == null ){
        //insert
        this.AdminService.insertHotel(this.AdminService.form.value);
      }
      else {
        //update 
        this.AdminService.updateHotel(this.AdminService.form.value);
      }
      this.showSuccessMessage =true;// we set the property to true
      setTimeout(()=> this.showSuccessMessage=false,3000);
      this.submitted = false;
      this.AdminService.form.reset();// the form will be empty after new record created
		}
	}

  toggleKey(){
    this.isHidden = !this.isHidden;
  }
}