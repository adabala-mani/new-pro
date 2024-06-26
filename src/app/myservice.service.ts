import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
welcome: any;
  // welcome() {
  //   throw new Error('Method not implemented.');
  // }
//   [x: string]: any;
//   pro="http://localhost:3000/productData"


//   constructor(private mydata:HttpClient) { }
// welcome(){
//   return this.mydata.get("http://localhost:3000/item_data")

//   }

// proData(){
//   return this.mydata.get(this.pro)
// }


// api="http://localhost:3000/productData";

constructor(private getdata:HttpClient){

}
comingData(){
  return this.getdata.get("http://localhost:3000/productData");
}
 }



