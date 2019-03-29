import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

export interface IState {
    counter: counterState
}

export interface counterState {
    count: number
}

export const state = combineReducers<IState>({
    counter: counterReducer
})