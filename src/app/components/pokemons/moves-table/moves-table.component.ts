import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Move} from '../../../services/pokeapi/move.model';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.scss']
})
export class MovesTableComponent {
  @Input()moves: Move[];
  displayedColumns: string[] = ['name', 'pp', 'acc', 'type'];

  constructor() { }
}
