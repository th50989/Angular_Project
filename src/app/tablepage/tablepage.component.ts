import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Person } from '../Models/model';



@Component({
  selector: 'app-tablepage',
  templateUrl: './tablepage.component.html',
  styleUrls: ['./tablepage.component.css']
})



//  items: Item[]=[];


export class TablepageComponent {
  private personsCollection: AngularFirestoreCollection<Person>;
  persons : Observable<Person[]>;
  persons1: Person[]=[];
  title="";
  config: any;
  constructor(private readonly afs: AngularFirestore) {

    this.personsCollection = afs.collection<Person>('Person');
			//this.items = this.itemsCollection.valueChanges();
			// .valueChanges() is simple. It just returns the 
			// JSON data without metadata. If you need the 
			// doc.id() in the value you must persist it your self
			// or use .snapshotChanges() instead. Only using for versions 7 and earlier
			this.persons = this.personsCollection.valueChanges( { idField: 'key-id' }); //chỉ sử dụng cho Angular 8,9
			//id1: ten field đại diện cho documnent id, lưu ý không 
			//được đặt trùng với tên field khai báo trong dữ liệu
      this.persons.subscribe(data =>{this.persons1=data})
      this.config = {
        itemsPerPage: 2,
        currentPage: 1,
        totalItems: this.persons1.length,
      };
  }


  addItemtoFirebase(id:number ,Name:string,Age:number, PhoneNum:number, Position:string,Mariage:boolean)
  {
  
    let ps: Person = {};
    ps.id =id
    ps.Name=Name
    ps.Age=Age
    ps.PhoneNum=PhoneNum
    ps.Position=Position
    ps.Mariage=Mariage;
    let docid = "10";
    // tạo docid bằng AngularFirestore
    //const id = this.afs.createId();
  
      //this.itemsCollection.add(it);//thêm với docid tự động tạo
      
      //them vao itemsCollection với docid cụ thể
      this.personsCollection.doc(docid).set(Object.assign({}, ps));//Object.assign({} khong co lenh nay thi se khong them vao firebase duoc
  }
  
  delete(docId = "10"){
    this.personsCollection.doc(docId).delete();
    }
  ngOnInit():void
  {

  }

  pageChanged(event:number){
    this.config.currentPage = event;
  }

}
