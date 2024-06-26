import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloap';
  outGoing:any
  constructor(private income:MyserviceService){

    this.income.comingData().subscribe((comdata)=>{
this.outGoing=comdata
    })
  
  
  
  }
}

