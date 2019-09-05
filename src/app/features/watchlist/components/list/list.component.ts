import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WatchlistListItem } from '../../models';
import { Observable } from 'rxjs';
import { WatchListState, selectWatchListItems } from '../../reducers';
import { Store } from '@ngrx/store';
// don't need to user index since we exported it from there and index is a magic file name where we don't have to add it here

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // when parent pushes new data into the input WatchlistListItem[], it compares. Don't need to watch every property, just the input.
  // Will only work on inputs
  // Useful when displaying an array of things.
})
export class ListComponent implements OnInit {

  @Input() items: WatchlistListItem[];
  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {
  }

}
