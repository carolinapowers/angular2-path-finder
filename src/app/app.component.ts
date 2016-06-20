import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FooterComponent]
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  }
}
