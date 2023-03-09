import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GPerson } from '../Models/model';
import { EmailsService } from '../Services/emails.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  insertFrm: FormGroup;
  constructor(private authService: EmailsService, private router:Router, private fb:FormBuilder) {

    this.insertFrm = this.fb.group({
      Email: ['', [Validators.required,Validators.email]],
      Password: ['', [Validators.required]],
      

      // password:['', Validators.required],
      // confirmpassword:['', Validators.required]
    },)
  }

  ngOnInit(): void {

  }

  gglogin() {
    console.log('1');
    this.authService.gglogin().then(user => {console.log('function');console.log(user);
        this.router.navigate(["/home"]);}
        // location.href = "/home"
        ).catch(err => {
        console.log(err);

      });
  }

  normallogin()
  {
    let p= new GPerson(); 
    p.Email=this.insertFrm.controls["Email"].value;
    p.Password=this.insertFrm.controls["Password"].value;
    this.authService.signinFirebase(p.Email,p.Password).then(user => {console.log('function');console.log(user);this.router.navigate([""]);})
  }

  
}
