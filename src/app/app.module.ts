import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'
import { elementReducer } from './reducers/element.reducers';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component'

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      element: elementReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
