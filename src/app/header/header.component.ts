import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['../styles/template.css', 'header.component.css'],
  styles: [`
  	.header {
  		color: #fff;
  	}
  `]
})
export class HeaderComponent implements OnInit {

  constructor() {}

	 ngOnInit() {
  }
  

}
