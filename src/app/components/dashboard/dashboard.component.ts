import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private auth:UsersService){}
logout(){
this.auth.signOut();
}
}
