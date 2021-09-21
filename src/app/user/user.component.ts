import {Router, ActivatedRoute} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { DetailsService } from '../details.service'; 



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
data:any;
list:any;
val:Array<{}>=[];
message:any;

    constructor(public msg : DetailsService,
      private router :Router,
      private route :ActivatedRoute) { 
  
    }
    ngOnInit(): void {
      this.msg.getMessage().subscribe(data =>
        {
          this.list = data
        })
    }
  Remove(list1:any)
  {
    this.list.forEach((value:any, index:any)=>
    {
      if(value==list1)
      {
        this.list.splice(index, 1)
      }

    })
  }
  view(list1:any)
  {
    this.list.forEach((value:any, index:any)=>
    {
      if(value==list1)
      {
        this.val = list1
        console.log("User", this.val)
        this.router.navigate(['./profile'],
        {
          queryParams:{data:JSON.stringify(this.val)}
        }
        )
      }
    })

  }

  }


