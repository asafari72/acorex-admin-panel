import { Component } from '@angular/core';
import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(private layoutService:LayoutService){
    this.layoutService.detectMode()
  }


}
