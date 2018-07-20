import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { isEmpty, pic } from 'lodash/fp';
import { Store } from '@ngrx/store';

import {
  CloseoutFormActions,
  SetTicketSales,
  SetBandDeposit,
  SetBandPayment,
  SetBarBank,
  SetBarSales,
  SetBarMerchReceipts,
  SetMerchSales,
  SetParkingPayment,
  SetPhotographyPayment,
  SetSoundPayment,
  SetStep,
  SetTicketSalesTax,
  SetTotalDeposit,
  SetTotalWithdrawal,
  SetTotalExpenses,
  SetTotalTicketsSold,
  SetDoorPayment,
  Submit,
} from './closeout-form.actions';
import { switchMap, withLatestFrom, pluck, filter, combineLatest } from 'rxjs/operators';

const filterEmpty = filter((something) => !isEmpty(something));


@Injectable()
export class CloseoutFormEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<any>
  ) { }

}
