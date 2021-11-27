import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() message: string = '';

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
  }

  goToAbout(): void {
    this.router.navigate(['about/1'], {relativeTo: this.activatedRoute, queryParams: {'message': 'Hello', 'name': 'John', 'age': '30'}});
  }

}
