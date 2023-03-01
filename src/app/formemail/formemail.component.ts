import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../Models/function';
import { GPerson } from '../Models/model';
import { EmailsService } from '../Services/emails.service';

@Component({
  selector: 'app-formemail',
  templateUrl: './formemail.component.html',
  styleUrls: ['./formemail.component.css']
})
export class FormemailComponent {
  insertFrm: FormGroup;


  constructor(private fb: FormBuilder,private services:EmailsService) {
    this.insertFrm = this.fb.group({
      Email: ['', [Validators.required,Validators.email]],
      Password: ['', [Validators.required]],
      Confirmpassword: ['', Validators.required],

      // password:['', Validators.required],
      // confirmpassword:['', Validators.required]
    },
      {validator: MustMatch('Password', 'Confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
    )

  };

  ngOnInit(): void {
  }
  SignUp() { 
  //   if (this.insertFrm.invalid)
	// 			{
	// 			  return;
	// 			}		
  //lay thông tin dữ liệu nhập trên form
  let p= new GPerson(); 
  p.Email=this.insertFrm.controls["Email"].value;
  p.Password=this.insertFrm.controls["Password"].value;
  // p.Confirmpassword=this.insertFrm.controls["Confirmpassword"].value;
  //...tương tự cho những trường khác

  this.services.signup(p.Email,p.Password).then(data =>{console.log("ss")}) //gọi với tên hàm tương ứng với bước số 7
  
  }
}
