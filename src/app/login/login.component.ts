
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl  } from '@angular/forms';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form :any;
User_details:any;
a:any;
data:Array<{username:"", email:""}> = [];
  constructor(public msg:DetailsService) { 
    this.form = new FormGroup(
      {
        name:new FormControl("",Validators.required),
        email:new  FormControl("",Validators.required),
        pswd:new FormControl("",Validators.required)
      }
    )
  }
  ngOnInit(): void {

  }
  sendMessage()
  {
    this.data=this.form.value;
    console.log(this.data)
    this.msg.sendMessage(this.data)
  }
}


