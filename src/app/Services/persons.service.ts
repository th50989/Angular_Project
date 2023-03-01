import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/model';



@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  

    constructor(private http: HttpClient) { }

    getItems():  Product[]{

     let product: Product[] = [];
     
     this.http.get<Product[]>('http://localhost:8000/api/get/').subscribe(data =>{product=data;console.log(product);console.log(data)});
     console.log(product);  
     return product;
    
  }

  insertProduct(item:Product): Observable<Product> {
    //	const headers = { 'content-type': 'application/json'} 
    //	console.log(JSON.stringify(item))						
      return this.http.post<Product>('http://localhost:8000/api/insert/', item,);
  }
  deleteProduct(item:Product): Observable<Product> {
    //	const headers = { 'content-type': 'application/json'} 
    //	console.log(JSON.stringify(item))						
      return this.http.delete<Product>('http://localhost:8000/api/delete/', );
  }
  updateProduct(item:Product): Observable<Product> {
    //	const headers = { 'content-type': 'application/json'} 
    //	console.log(JSON.stringify(item))						
      return this.http.get<Product>('http://localhost:8000/api/update/', );
  }
}
