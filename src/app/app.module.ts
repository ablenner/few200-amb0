import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dasboard.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoModule } from './features/todo/todo.module';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { WatchlistModule } from './features/watchlist/watchlist.module';
import { BookcollectionModule } from './features/bookcollection/bookcollection.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    NavComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    WatchlistModule,
    BookcollectionModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(), // need this to run the chrome redux add-on. don't keep this in prod
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
