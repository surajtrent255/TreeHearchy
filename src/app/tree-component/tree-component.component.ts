import { Component, Input } from '@angular/core';
import { Node } from '../Node';

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent {
  @Input() nodes !: Node[];

  toggleNode(node: Node) {
    node.showChildren = !node.showChildren;
  }
}
