import { Action } from '@ngrx/store';

export interface IPayloadAction extends Action {
  type: string;
  payload?: any;
}
