import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookcollectionComponent } from './bookcollection.component';
import { BookentryComponent } from './components/bookentry/bookentry.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, featureName } from './reducers';
import { BookListEffects } from './effects/booklist.effects';
import { BooklistComponent } from './components/booklist/booklist.component';




@NgModule({
  declarations: [BookcollectionComponent, BookentryComponent, BooklistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([BookListEffects]),
  ]
})
export class BookcollectionModule { }
