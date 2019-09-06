import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookListState } from '../../reducers/booklist.reducer';
import { bookAdded } from '../../actions/booklist.actions';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  @Output() bookAdded = new EventEmitter<string>();
  constructor(private store: Store<BookListState>) { }

  ngOnInit() {
  }

  addBook(bookEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLSelectElement) {
    this.store.dispatch(bookAdded({ title: bookEl.value, author: authorEl.value, format: formatEl.value }));
    bookEl.value = '';
    authorEl.value = '';
    formatEl.value = 'Hardcover';
    bookEl.focus();
  }
}
