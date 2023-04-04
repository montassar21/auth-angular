import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { first } from 'rxjs';
import { UsersService } from '../users.service';
import { ValidateForm } from 'src/app/helpers/validateform';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
type:string="password";
isText:boolean=false;
eyeIcon:string= "fa-eye-slash";
loginForm!:FormGroup;
constructor(
private fb:FormBuilder,
private route:Router,
private auth:UsersService

)
{

}

ngOnInit():void{
this.loginForm=this.fb.group({
email:['',Validators.required],
password:['',Validators.required]
})
}
// postData(forms:any){
//   this.checkUser.checkUser(
//     this.loginForm.value.name,
//     this.loginForm.value.email,
//     this.loginForm.value.phone,
//     this.loginForm.value.password,
//     ).pipe(first()).subscribe(
//       (data) =>{
//         console.log(data);
//         this.route.navigate(['signup'])


//       },error=>{

//       }
//     );
//   }
hideShowPass(){
  this.isText= !this.isText;
  this.isText ? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash"
  this.isText?this.type="text":this.type="password"
}
onLogin(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
    //send the obj to database
    this.auth.login(this.loginForm.value).subscribe({
      next:(res=>{
        alert(res.Message);
      }),
      error:(err=>{
        alert(err.error.Message);
      })
    })
  }
  else{
    //throw the error using toaster and with required field
    ValidateForm.vlidateAllFormFields(this.loginForm);
    alert("Your form is invalid !");
  }
}
}
