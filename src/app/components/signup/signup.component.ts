import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { UsersService } from '../users.service';
import {first} from 'rxjs/operators';
import { ValidateForm } from 'src/app/helpers/validateform';
@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
type:string="password";
isText:boolean=false;
eyeIcon:string= "fa-eye-slash";
angForm!:FormGroup;
constructor(
private fb:FormBuilder,
private route:Router,
private auth: UsersService
)
{
}
ngOnInit():void{
  this.angForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    password1:['',Validators.required],
    password2:['',Validators.required]

  })
}

hideShowPass(){
  this.isText= !this.isText;
  this.isText ? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash"
  this.isText?this.type="text":this.type="password"
}
onSignup(){
  if(this.angForm.valid){
   this.auth.signUp(this.angForm.value).subscribe({
    next:(res=>{
      alert(res.Message);
      this.angForm.reset();
      if(res.Message=="Register success !")
      this.route.navigate(['login'])

    })
   ,error:(err=>{
    alert(err?.error.Message);
   })

   })
  }
  else{
  alert("Invalid input !")
ValidateForm.vlidateAllFormFields(this.angForm);
  }
}

}
