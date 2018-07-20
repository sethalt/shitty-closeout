import { IPayloadAction } from './types';

export const CloseoutFormActions = {
  SET_STEP: '[CloseoutForm] Set Step',
  SET_HOUSE_COUNT: '[CloseoutForm] Set House Count',
  SET_TICKET_TURNBACKS: '[CloseoutForm] Set Ticket turnbacks',
  SET_NO_SHOWS: '[CloseoutForm] Set No Shows',
  SET_ONLINE_SALES: '[CloseoutForm] Set BPT Sales',
  SET_DOOR_SALES: '[CloseoutForm] Set Door Sales',
  SET_TOTAL_TICKETS_SOLD: '[CloseoutForm] Set Total Tickets Sold',
  SET_TICKET_SALES: '[CloseoutForm] Set ticket sales',
  SET_TICKET_SALES_TAX: '[CloseoutForm] Set ticket sales tax',
  SET_BAND_PAYMENT: '[CloseoutForm] Set band payment',
  SET_BAR_PAYMENT: '[CloseoutForm] Set bar payment',
  SET_PARKING_PAYMENT: '[CloseoutForm] Set parking payment',
  SET_DOOR_PAYMENT: '[CloseoutForm] Set door payment',
  SET_PHOTOGRAPHY_PAYMENT: '[CloseoutForm] Set photography payment',
  SET_SOUND_PAYMENT: '[CloseoutForm] Set sound payment',
  SET_OTHER_PAYMENT: '[CloseoutForm] Set other payment',
  SET_BAR_SALES: '[CloseoutForm] Set bar sales',
  SET_MERCH_SALES: '[CloseoutForm] Set merch sales',
  SET_POSTER_SALES: '[CloseoutForm] Set poster sales',
  SET_BAR_MERCH_RECEIPTS: '[CloseoutForm] Set bar merch receipts',
  SET_TOTAL_WITHDRAWAL: '[CloseoutForm] Set total withdrawal',
  SET_BAR_BANK: '[CloseoutForm] Set bar bank',
  SET_BAND_DEPOSIT: '[CloseoutForm] Set band deposit',
  SET_TOTAL_EXPENSES: '[CloseoutForm] Set total expenses',
  SET_TOTAL_DEPOSIT: '[CloseoutForm] Set total deposit',
  SET_TOTAL_PROFIT: '[CloseoutForm] Set total profit',
  SUBMIT: '[CloseoutForm] Submit',
  REVISE: '[CloseoutForm] Revise',
};

export class SetStep implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_STEP;
  constructor(public payload: number) {}
}

export class SetHouseCount implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_HOUSE_COUNT;
  constructor(public payload: number) {
  }
}

export class SetTicketTurnbacks implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TICKET_TURNBACKS;
  constructor(public payload: number) {
  }
}

export class SetNoShows implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_NO_SHOWS;
  constructor(public payload: number) {
  }
}

export class SetOnlineSales implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_ONLINE_SALES;
  constructor(public payload: number) {
  }
}

export class SetDoorSales implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_DOOR_SALES;
  constructor(public payload: number) {
  }
}

export class SetTicketSales implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TICKET_SALES;
  constructor(public payload: number) {
  }
}


export class SetTotalTicketsSold implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TOTAL_TICKETS_SOLD;
  constructor(public payload: number) {
  }
}

export class SetTicketSalesTax implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TICKET_SALES_TAX;
  constructor(public payload: number) {}
}

export class SetBandPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_BAND_PAYMENT;
  constructor(public payload: number) {}
}

export class SetBarPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_BAR_PAYMENT;
  constructor(public payload: number) {}
}

export class SetDoorPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_DOOR_PAYMENT;
  constructor(public payload: number) {}
}

export class SetParkingPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_PARKING_PAYMENT;
  constructor(public payload: number) {}
}

export class SetPhotographyPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_PHOTOGRAPHY_PAYMENT;
  constructor(public payload: number) {}
}

export class SetSoundPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_SOUND_PAYMENT;
  constructor(public payload: number) {}
}

export class SetOtherPayment implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_OTHER_PAYMENT;
  constructor(public payload: number) {}
}

export class SetBarSales implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_BAR_SALES;
  constructor(public payload: number) {}
}

export class SetMerchSales implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_MERCH_SALES;
  constructor(public payload: number) {}
}

export class SetPosterSales implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_POSTER_SALES;
  constructor(public payload: number) {}
}

export class SetBarMerchReceipts implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_BAR_MERCH_RECEIPTS;
  constructor(public payload: number) {}
}

export class SetTotalWithdrawal implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TOTAL_WITHDRAWAL;
  constructor(public payload: number) {}
}

export class SetBarBank implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_BAR_BANK;
  constructor(public payload: number) {}
}

export class SetBandDeposit implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_BAND_DEPOSIT;
  constructor(public payload: number) {}
}

export class SetTotalExpenses implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TOTAL_EXPENSES;
  constructor(public payload: number) {}
}

export class SetTotalDeposit implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TOTAL_DEPOSIT;
  constructor(public payload: number) {}
}

export class SetTotalProfit implements IPayloadAction {
  readonly type = CloseoutFormActions.SET_TOTAL_PROFIT;
  constructor(public payload: number) {}
}

export class Submit implements IPayloadAction {
  readonly type = CloseoutFormActions.SUBMIT;
}

export class Revise implements IPayloadAction {
  readonly type = CloseoutFormActions.REVISE;
}

