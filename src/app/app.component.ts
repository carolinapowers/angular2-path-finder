import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'app works!';

  constructor () {

  }
}


