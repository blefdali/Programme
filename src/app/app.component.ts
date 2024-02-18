import { Component } from '@angular/core';
import { Program } from './program.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  ProgramData: Program = {
    title: 'Your Program Title',
    elements: [
      {
        title: 'Element 1',
        type: 'Type 1',
        elements: [
          { title: 'Subelement 1', type: 'Subtype 1' },
          { title: 'Subelement 2', type: 'Subtype 2' }
        ]
      },
      { title: 'Element 2', type: 'Type 2' }
    ]
  };

}
