import { Component } from '@angular/core';
import { CreaCatService } from 'src/app/cration/crea-cat.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:CreaCatService){}
  catData:any;
  ngOnInit(): void {
    this.catData = this.service.catDetails;
  }

}
