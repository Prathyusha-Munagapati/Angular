import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import {DetailsService} from '../details.service'



@Component({
  selector: 'app-sinup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})

export class SinupCompComponent implements OnInit {
title="Text";
frm:any;
fname:any;
uname:any;
email:any;
phno:any;
pwd1:any;
pwd:any;
details:Array<{fname:"",unme:"",email:"",phno:number,pwd:"",pwd1:""}>=[];
Child:any;
constructor( public message :DetailsService){
  this.frm = new FormGroup(
    {
      fname:new FormControl("",Validators.required),
      uname:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      pswd:new FormControl("",Validators.required),
      cpswd:new FormControl("",Validators.required),
      phnno:new FormControl("",Validators.required)
    }
    
  )
}
  ngOnInit(): void {
   
  }
  getValue()
  {
    this.details = this.frm.value
    console.log(this.details)
   this.message.sendMessage(this.details);

  }


  }


 




