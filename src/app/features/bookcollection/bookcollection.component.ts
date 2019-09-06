import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooklistListItem } from './models';
import { Store } from '@ngrx/store';
import { selectBookListItems, BookCollectionState } from './reducers';

@Component({
  selector: 'app-bookcollection',
  templateUrl: './bookcollection.component.html',
  styleUrls: ['./bookcollection.component.css']
})
export class BookcollectionComponent implements OnInit {

  books$: Observable<BooklistListItem[]>;
  constructor(private store: Store<BookCollectionState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBookListItems);
  }

}
