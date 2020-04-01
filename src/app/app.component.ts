import { Component } from '@angular/core';
import { ResizeService } from './directives/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'screen-directive';
  constructor(private resizeService: ResizeService){
    this.resizeService.setConfiguration({
      mobile: 500,
      tablet: 800
    })
  }
}
