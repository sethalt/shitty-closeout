import { CloseoutFormActions } from './closeout-form.actions';
import { IPayloadAction } from './types';
import { closeout } from './closeout-form.state';
import { } from 'lodash';

const initialState = closeout;

export function closeoutFormReducer(state: any = initialState, action: IPayloadAction) {

  switch (action.type) {

    case CloseoutFormActions.SET_STEP: {
      return { ...state, step: action.payload };
    }

    case CloseoutFormActions.SET_HOUSE_COUNT: {
      return { ...state, houseCount: action.payload };
    }

    case CloseoutFormActions.SET_TICKET_TURNBACKS: {
      return { ...state, ticketTurnbacks: action.payload };
    }

    case CloseoutFormActions.SET_NO_SHOWS: {
      return { ...state, noShows: action.payload };
    }

    case CloseoutFormActions.SET_ONLINE_SALES: {
      return { ...state, onlineSales: action.payload };
    }

    case CloseoutFormActions.SET_DOOR_SALES: {
      return { ...state, doorSales: action.payload };
    }

    case CloseoutFormActions.SET_TICKET_SALES: {
      return { ...state, ticketSales: action.payload, ticketSalesTax: action.payload * 0.055 };
    }

    case CloseoutFormActions.SET_TICKET_SALES_TAX: {
      return { ...state, ticketSalesTax: action.payload };
    }

    case CloseoutFormActions.SET_BAND_PAYMENT: {
      return { ...state, bandPayment: action.payload };
    }

    case CloseoutFormActions.SET_BAR_PAYMENT: {
      return { ...state, barPayment: action.payload };
    }

    case CloseoutFormActions.SET_DOOR_PAYMENT: {
      return { ...state, doorPayment: action.payload };
    }

    case CloseoutFormActions.SET_PARKING_PAYMENT: {
      return { ...state, parkingPayment: action.payload };
    }

    case CloseoutFormActions.SET_PHOTOGRAPHY_PAYMENT: {
      return { ...state, photographyPayment: action.payload };
    }

    case CloseoutFormActions.SET_SOUND_PAYMENT: {
      return { ...state, soundPayment: action.payload };
    }

    case CloseoutFormActions.SET_OTHER_PAYMENT: {
      return { ...state, otherPayment: action.payload };
    }

    case CloseoutFormActions.SET_BAR_SALES: {
      return { ...state, barSales: action.payload };
    }

    case CloseoutFormActions.SET_MERCH_SALES: {
      return { ...state, merchSales: action.payload };
    }

    case CloseoutFormActions.SET_POSTER_SALES: {
      return { ...state, posterSales: action.payload };
    }

    case CloseoutFormActions.SET_TOTAL_WITHDRAWAL: {
      return { ...state, totalWithdrawal: action.payload };
    }

    case CloseoutFormActions.SET_BAR_BANK: {
      return { ...state, barBank: action.payload };
    }

    case CloseoutFormActions.SET_BAND_DEPOSIT: {
      return { ...state, bandDeposit: action.payload };
    }

    case CloseoutFormActions.SET_TOTAL_EXPENSES: {
      return { ...state, totalExpenses: action.payload };
    }

    case CloseoutFormActions.SET_TOTAL_DEPOSIT: {
      return { ...state, totalDeposit: action.payload };
    }

    case CloseoutFormActions.SET_TOTAL_PROFIT: {
      return { ...state, totalProfit: action.payload };
    }

    case CloseoutFormActions.SUBMIT: {
      const tixReceipts = calcTotalTickets(state);
      const tixSales = tixReceipts / 1.055;
      const tixTax = tixReceipts - tixSales;
      const totalExpenses = calcTotalExpenses(state);
      let barSales = state.barSales;
      let totalDeposit = state.totalDeposit;

      if (state.totalDeposit && state.totalDeposit > 0) {
        barSales = calcBarSales(state);
      } else {
        totalDeposit = calcTotalDeposit(state);
      }

      const bmReceipts = calcTotalBarMerchSales(state, barSales);
      const bmSales = bmReceipts / 1.055;
      const bmTax = bmReceipts - bmSales;
      const totalSales = bmSales + tixSales;
      const totalProfit = totalSales - totalExpenses - state.bandDeposit;

      return {
        ...state,
        submitted: true,
        barSales: barSales,
        totalDeposit: totalDeposit,
        totalTicketsSold: tixReceipts,
        ticketSales: Math.round(tixSales * 100) / 100,
        ticketSalesTax: Math.round(tixTax * 100) / 100,
        totalExpenses: totalExpenses,
        barMerchReceipts: bmReceipts,
        barMerchSales: Math.round(bmSales * 100) / 100,
        barMerchTax: Math.round(bmTax * 100) / 100,
        totalSales: Math.round(totalSales * 100) / 100,
        totalProfit: Math.round(totalProfit * 100) / 100,
      };
    }

    case CloseoutFormActions.REVISE: {
      return { ...state, submitted: false };
    }

    default: {
      return state;
    }
  }
}


function calcTotalTickets(closeoutForm) {
  let totalTickets = 0;
  totalTickets += closeoutForm.onlineSales;
  totalTickets += closeoutForm.doorSales;
  return totalTickets;
}

function calcTotalExpenses(closeoutForm) {
  let totalExpenses = 0;
  totalExpenses += closeoutForm.bandPayment;
  totalExpenses += closeoutForm.barPayment;
  totalExpenses += closeoutForm.doorPayment;
  totalExpenses += closeoutForm.parkingPayment;
  totalExpenses += closeoutForm.photographyPayment;
  totalExpenses += closeoutForm.soundPayment;
  totalExpenses += closeoutForm.otherPayment;
  return totalExpenses;
}

function calcBarSales(closeoutForm) {
  return closeoutForm.totalDeposit -
  closeoutForm.posterSales -
  closeoutForm.merchSales -
  closeoutForm.doorSales -
  closeoutForm.totalWithdrawal +
  calcTotalExpenses(closeoutForm);
}

function calcTotalDeposit(closeoutForm) {
  return closeoutForm.doorSales +
  closeoutForm.posterSales +
  closeoutForm.merchSales +
  closeoutForm.barSales +
  closeoutForm.totalWithdrawal -
  calcTotalExpenses(closeoutForm);
}

function calcTotalBarMerchSales(closeoutForm, barSales) {
  let totalSales = 0;
  totalSales += barSales;
  totalSales += closeoutForm.posterSales;
  totalSales += closeoutForm.merchSales;
  return totalSales;
}
