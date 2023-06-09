import { Component } from '@angular/core';
import { Node } from './Node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TreeProj';
  nodes: Node[] = [
    {
      id: 1, name: 'Node 1', children: [
        { id: 2, name: 'Node 1.1' },
        {
          id: 3, name: 'Node 1.2', children: [
            { id: 4, name: 'Node 1.2.1' },
            { id: 5, name: 'Node 1.2.2' }
          ]
        }
      ]
    },
    { id: 6, name: 'Node 2' }
  ];
}
