import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Element } from './../models/element.model';
import * as ElementActions from './../actions/element.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store:Store<AppState>) {   }

  addElement(key,value){
    this.store.dispatch(new ElementActions.AddElement({key:key, value:value}));
  }

  ngOnInit() {
  }

}
