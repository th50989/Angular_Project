import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, Product } from '../Models/model';
import { PersonsService } from '../Services/persons.service';

@Component({
  selector: 'app-sevicescomponent',
  templateUrl: './sevicescomponent.component.html',
  styleUrls: ['./sevicescomponent.component.css']
})
export class SevicescomponentComponent implements OnInit {
  products : Product[] =[] ;
 
 
  constructor(private service: PersonsService)
  {
    this.products = this.service.getItems();
  }
    

			ngOnInit() {
      }
}
