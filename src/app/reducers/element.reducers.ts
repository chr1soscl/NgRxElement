import { Action } from '@ngrx/store'
import { Element } from '../models/element.model'
import * as ElementActions from './../actions/element.actions'

const initialState: Element = {
    key: 'main',
    value: "{id:'button'}"
}

export function elementReducer(state:Element[]=[],action:ElementActions.Actions){
    switch(action.type){
        case ElementActions.ADD_ELEMENT:
             return [...state, action.payload];
        case ElementActions.REMOVE_ELEMENT:
             state.splice(action.payload,1);
             return state;
        default:
             return state;
    }
}

