import { Component, OnInit } from '@angular/core';
import { WatchlistListItem } from '../../models';
import { Observable } from 'rxjs';
import { WatchListState, selectWatchListItems } from '../../reducers';
import { Store } from '@ngrx/store';
// don't need to user index since we exported it from there and index is a magic file name where we don't have to add it here

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items$: Observable<WatchlistListItem[]>;
  constructor(private store: Store<WatchListState>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectWatchListItems);
  }

}
