import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Subscriber } from 'rxjs';
import { compileClassMetadata } from '@angular/compiler';
@Component({
  selector: 'app-lap',
  templateUrl: './lap.component.html',
  styleUrls: ['./lap.component.scss']
})
export class LapComponent {
  // fast:any
  // constructor(private enterdata:MyserviceService){
  //   this.getproData() 
  // }
  // getproData(){
  //   this.enterdata.proData().subscribe((res: any)=>{
  //     this.fast=res
  //   })

  // }


outGoing:any
  constructor(private income:MyserviceService){

    this.income.comingData().subscribe((comdata)=>{
this.outGoing=comdata
    })
  
  
  
  }
}







