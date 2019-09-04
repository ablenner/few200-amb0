import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCurrentCount, selectCountBy, AppState } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  current$: Observable<number>;
  by$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.current$ = this.store.select(selectCurrentCount);
    this.by$ = this.store.select(selectCountBy);
  }
}
