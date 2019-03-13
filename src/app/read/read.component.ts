import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../models/element.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ElementActions from './../actions/element.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  elements: Observable<Element[]>;

  constructor(private store: Store<AppState>) { 
    this.elements = store.select('element');
  }

  deleteElement(index){
    this.store.dispatch(new ElementActions.RemoveElement(index));
  }

  ngOnInit() {
  }

}
