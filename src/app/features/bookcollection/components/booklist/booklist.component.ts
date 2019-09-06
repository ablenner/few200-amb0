import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BooklistListItem } from '../../models';
import { Store } from '@ngrx/store';
import { BookListState } from '../../reducers/booklist.reducer';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooklistComponent implements OnInit {

  @Input() books: BooklistListItem[];
  constructor(private store: Store<BookListState>) { }

  ngOnInit() {
  }

}
