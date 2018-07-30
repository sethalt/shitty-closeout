import { Submit, Revise } from './closeout-form.actions';
import { closeoutFormReducer } from './closeout-form.reducer';
import {
  closeoutTest1,
  closeoutTest2,
  closeoutTest3,
  closeoutTest4,
  closeoutTest5,
  closeoutTest6,
  closeoutTest7,
} from './closeout-form.state';

xdescribe('state 1', () => {
  const state = closeoutTest1;
  it('should return true', () => {
    const action = new Submit();
    const newState = closeoutFormReducer(state, action);
    expect(newState.ticketSalesTax).toEqual(143.36);
    expect(newState.barMerchTax).toEqual(59.95);
    expect(newState.totalDeposit).toEqual(1330);
    expect(newState.barSales).toEqual(1075);
    expect(newState.totalSales).toEqual(3696.69);
    expect(newState.totalExpenses).toEqual(1645);
    expect(newState.totalProfit).toEqual(1526.69);
  });
});

describe('state 2', () => {
  const state = closeoutTest2;
  it('should return true', () => {
    const action = new Submit();
    const newState = closeoutFormReducer(state, action);
    expect(newState.onlineSales).toEqual(2640);
    expect(newState.ticketSales).toEqual(2502.37);
    expect(newState.ticketSalesTax).toEqual(137.63);
    expect(newState.barMerchTax).toEqual(80.34);
    expect(newState.totalDeposit).toEqual(1381);
    expect(newState.barSales).toEqual(1317);
    expect(newState.totalSales).toEqual(3963.03);
    expect(newState.totalExpenses).toEqual(1660);
    expect(newState.totalProfit).toEqual(2018.03);
  });
});

describe('state 3', () => {
  const state = closeoutTest3;
  it('should return true', () => {
    const action = new Submit();
    const newState = closeoutFormReducer(state, action);
    expect(newState.onlineSales).toEqual(2640);
    expect(newState.ticketSales).toEqual(2502.37);
    expect(newState.ticketSalesTax).toEqual(137.63);
    expect(newState.barMerchTax).toEqual(80.34);
    expect(newState.totalDeposit).toEqual(1381);
    expect(newState.barSales).toEqual(1317);
    expect(newState.totalSales).toEqual(3963.03);
    expect(newState.totalExpenses).toEqual(1660);
    expect(newState.totalProfit).toEqual(2018.03);
  });
});

describe('state 4', () => {
  const state = closeoutTest4;
  it('should return true', () => {
    const action = new Submit();
    const newState = closeoutFormReducer(state, action);
    expect(newState.ticketSales).toEqual(3279.62);
    expect(newState.ticketSalesTax).toEqual(180.38);
    expect(newState.barMerchTax).toEqual(75.07);
    expect(newState.totalDeposit).toEqual(1555);
    expect(newState.barSales).toEqual(1306);
  });
});

describe('state 5', () => {
  const state = closeoutTest5;
  it('should return true', () => {
    const action = new Submit();
    const newState = closeoutFormReducer(state, action);
    expect(newState.ticketSales).toEqual(2165.88);
    expect(newState.ticketSalesTax).toEqual(119.12);
    expect(newState.barMerchTax).toEqual(63.76);
    expect(newState.totalDeposit).toEqual(1158);
    expect(newState.barSales).toEqual(1161);
  });
});

describe('state 6', () => {
  const state = closeoutTest6;
  it('should return true', () => {
    const submitAction = new Submit();
    const reviseAction = new Revise();
    const newState = closeoutFormReducer(state, submitAction);

    expect(newState.totalSales).toEqual(3596.21);
    expect(newState.totalDeposit).toEqual(819.00);
    expect(newState.barSales).toEqual(1074);
    expect(newState.totalExpenses).toEqual(1820);
    expect(newState.calculationType).toEqual('deposit');

    const revisedState = closeoutFormReducer(newState, reviseAction);
    revisedState.merchSales = 50;
    expect(revisedState.totalDeposit).toEqual(0);
    expect(revisedState.barSales).toEqual(1074);

    const finalState = closeoutFormReducer(revisedState, submitAction);

    expect(finalState.totalSales).toEqual(3586.73);
    expect(finalState.totalDeposit).toEqual(809.00);
    expect(finalState.barSales).toEqual(1074);
    expect(finalState.totalExpenses).toEqual(1820);
    expect(finalState.calculationType).toEqual('deposit');
  });
});

describe('state 7', () => {
  const state = closeoutTest7;
  it('should return true', () => {
    const submitAction = new Submit();
    const reviseAction = new Revise();
    const newState = closeoutFormReducer(state, submitAction);
    expect(newState.totalSales).toEqual(4016.11);
    expect(newState.totalDeposit).toEqual(1312);
    expect(newState.barSales).toEqual(1035);
    expect(newState.totalExpenses).toEqual(2020);
    expect(newState.calculationType).toEqual('bar');

    closeoutFormReducer(newState, reviseAction);
    const revisedState = closeoutFormReducer(newState, reviseAction);
    revisedState.merchSales = 50;
    expect(revisedState.totalDeposit).toEqual(1312);
    expect(revisedState.barSales).toEqual(0);
    revisedState.merchSales = 20;

    const finalState = closeoutFormReducer(revisedState, submitAction);
    expect(finalState.totalSales).toEqual(4016.11);
    expect(finalState.totalDeposit).toEqual(1312);
    expect(finalState.barSales).toEqual(1055);
    expect(finalState.totalExpenses).toEqual(2020);
    expect(finalState.calculationType).toEqual('bar');
  });
});
