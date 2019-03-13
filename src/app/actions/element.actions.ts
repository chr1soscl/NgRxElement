import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Element } from '../models/element.model';

export const ADD_ELEMENT = '[ELEMENT] Add'
export const REMOVE_ELEMENT = '[ELEMENT] Remove'

export class AddElement implements Action {
    readonly type = ADD_ELEMENT
    constructor(public payload: Element) {}
}

export class RemoveElement implements Action {
    readonly type = REMOVE_ELEMENT
    constructor(public payload: number) {}
}

export type Actions = AddElement | RemoveElement