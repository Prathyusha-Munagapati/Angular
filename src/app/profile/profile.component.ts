import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any
  name:any
  constructor(
    public router:Router,
    public route:ActivatedRoute) {

   }

  ngOnInit(){
    this.route.queryParams.subscribe(params=>
      {
        
        this.data = JSON.parse(params.data);
        console.log(this.data)
      })

  }

}