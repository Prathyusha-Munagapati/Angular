import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public name="";
  data:any;
  constructor(public message:DetailsService) { }

  ngOnInit(): void {
    this.message.getMessage().subscribe((message=>
      {
        this.data = message;
      }))
  }


}
