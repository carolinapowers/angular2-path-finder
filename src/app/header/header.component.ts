import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  styles: [`
  	.header {
  		color: #fff;
  		background-color: blue;
  	}
  `]
})
export class HeaderComponent implements OnInit {

  constructor() {}

	 ngOnInit() {
  }
  

}
