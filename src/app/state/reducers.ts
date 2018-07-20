import { ActionReducerMap } from '@ngrx/store';
import { closeoutFormReducer } from './closeout-form.reducer';

export const reducers: ActionReducerMap<any> = {
  closeoutForm: closeoutFormReducer,
};
