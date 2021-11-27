import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = '';
  params: any = '';
  queryParams: object = {};

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data=>{
      this.title=data['title'];
    }
    )
    this.activatedroute.params.subscribe(params=>{
      console.log(params);
      this.params=params['id'];
    })
    this.activatedroute.queryParams.subscribe(params=>{
      this.queryParams=params;
      console.log(params)
    })
  }
}
