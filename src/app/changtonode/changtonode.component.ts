import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../Models/function';
import { Product } from '../Models/model';
import { PersonsService } from '../Services/persons.service';

@Component({
  selector: 'app-changtonode',
  templateUrl: './changtonode.component.html',
  styleUrls: ['./changtonode.component.css']
})
export class ChangtonodeComponent implements OnInit {
  insertFrm: FormGroup;


  constructor(private fb: FormBuilder,private services:PersonsService) {
    this.insertFrm = this.fb.group({
      id: ['', Validators.required],
      Name: ['', [Validators.required]],
      Price: ['', Validators.required],

      // password:['', Validators.required],
      // confirmpassword:['', Validators.required]
    },
      //{validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
    )

  };



  ngOnInit(): void {

  }
  onSubmit() { 
  //   if (this.insertFrm.invalid)
	// 			{
	// 			  return;
	// 			}		
  let product = new Product();
  //lay thông tin dữ liệu nhập trên form
  product.id = this.insertFrm.controls["id"].value;
  product.Name = this.insertFrm.controls["Name"].value;
  product.Price = this.insertFrm.controls["Price"].value;
  //...tương tự cho những trường khác

  this.services.insertProduct(product).subscribe(data => console.log(data.Name)); //gọi với tên hàm tương ứng với bước số 7
  
  }

  deleteSubmit(  )
  {
    let product = new Product();
    
    product.id = this.insertFrm.controls["id"].value;
    // xoa produtc
    this.services.deleteProduct(product).subscribe(data => console.log(data.Name));
  }

  updateSubmit()
  {
    let product = new Product();
    product.id = this.insertFrm.controls["id"].value;
    
    product.id = this.insertFrm.controls["newId"].value;
    this.services.updateProduct(product).subscribe(data => console.log(data.Name));
  }
}