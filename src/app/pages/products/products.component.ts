import { Component, OnInit } from '@angular/core';
import { CreaCatService } from 'src/app/cration/crea-cat.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  
  constructor(private service:CreaCatService) { }
  catData:any;
  ngOnInit(): void {
    this.catData = this.service.catDetails;
  }

}
