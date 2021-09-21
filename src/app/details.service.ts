import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public subject = new BehaviorSubject<Array<{}>>([]);
data:Array<{}> =[];
  sendMessage(message:any)
  {
  
    this.data.push(message)
    this.subject.next(this.data); 
    console.log(this.data)

  }
  getMessage():Observable<any>
  {
    return this.subject.asObservable();
  }
  constructor() { }
}

  
 
 

 
  
  
  