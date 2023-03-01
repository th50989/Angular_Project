import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmailsService } from '../Services/emails.service';
import { StatusUserService } from '../Services/status-user.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  displayName:string="";
  photoURL:string="";
  @ViewChild('closebutton')closebutton:any;
  constructor(private userService:UserService, private eSer:EmailsService,private status:StatusUserService,private router:Router)
  {
    this.status.isUserLoggedIn.subscribe(value=>{
      if(value)
      {
        this.userService.getCurrentUser()
        .then(user=>{ this.displayName = user.displayName!=null? user.displayName: user.email,this.photoURL = user.photoURL != null ? user.photoURL : user.photoURL} );	
        console.log(this.displayName);	
      }
      else
      {
        this.displayName='';
      }
    })
    
  }
  ngOnInit(): void {
    
  }

  logout()
  {
    this.eSer.logout();
    this.closebutton.nativeElement.click();
			//location.href="/login";
      this.router.navigate(["/login"])
  }
}
