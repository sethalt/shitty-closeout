import { Component } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  SetTicketSales,
  SetBandDeposit,
  SetBandPayment,
  SetBarBank,
  SetBarSales,
  SetMerchSales,
  SetParkingPayment,
  SetPhotographyPayment,
  SetSoundPayment,
  SetStep,
  SetTicketSalesTax,
  SetTotalDeposit,
  SetTotalWithdrawal,
  SetBarPayment,
  SetDoorSales,
  SetHouseCount,
  SetNoShows,
  SetOnlineSales,
  SetOtherPayment,
  SetPosterSales,
  SetTicketTurnbacks,
  SetTotalExpenses,
  SetTotalProfit,
  SetTotalTicketsSold,
  SetBarMerchReceipts,
  SetDoorPayment,
  Submit,
  Revise,
} from './state/closeout-form.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  step$: Observable<number>;
  form: FormGroup;

  onlineSales$: Observable<number>;
  doorSales$: Observable<number>;
  totalTicketsSold$: Observable<number>;
  ticketSales$: Observable<number>;
  ticketSalesTax$: Observable<number>;

  bandPayment$: Observable<number>;
  barPayment$: Observable<number>;
  doorPayment$: Observable<number>;
  parkingPayment$: Observable<number>;
  photographyPayment$: Observable<number>;
  soundPayment$: Observable<number>;
  otherPayment$: Observable<number>;

  barBank$: Observable<number>;
  barSales$: Observable<number>;
  merchSales$: Observable<number>;
  posterSales$: Observable<number>;
  barMerchReceipts$: Observable<number>;
  barMerchSales$: Observable<number>;
  barMerchTax$: Observable<number>;

  totalExpenses$: Observable<number>;
  totalWithdrawal$: Observable<number>;
  bandDeposit$: Observable<number>;
  totalDeposit$: Observable<number>;
  totalSales$: Observable<number>;
  totalProfit$: Observable<number>;

  submitted$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) {
    this.step$ = this.store.select('closeoutForm', 'step');
    this.onlineSales$ = this.store.select('closeoutForm', 'onlineSales');
    this.doorSales$ = this.store.select('closeoutForm', 'doorSales');
    this.totalTicketsSold$ = this.store.select('closeoutForm', 'totalTicketsSold');
    this.ticketSales$ = this.store.select('closeoutForm', 'ticketSales');
    this.ticketSalesTax$ = this.store.select('closeoutForm', 'ticketSalesTax');

    this.bandPayment$ = this.store.select('closeoutForm', 'bandPayment');
    this.barPayment$ = this.store.select('closeoutForm', 'barPayment');
    this.doorPayment$ = this.store.select('closeoutForm', 'doorPayment');
    this.parkingPayment$ = this.store.select('closeoutForm', 'parkingPayment');
    this.photographyPayment$ = this.store.select('closeoutForm', 'photographyPayment');
    this.soundPayment$ = this.store.select('closeoutForm', 'soundPayment');
    this.otherPayment$ = this.store.select('closeoutForm', 'otherPayment');

    this.barBank$ = this.store.select('closeoutForm', 'barBank');
    this.barSales$ = this.store.select('closeoutForm', 'barSales');
    this.merchSales$ = this.store.select('closeoutForm', 'merchSales');
    this.posterSales$ = this.store.select('closeoutForm', 'posterSales');
    this.barMerchReceipts$ = this.store.select('closeoutForm', 'barMerchReceipts');
    this.barMerchSales$ = this.store.select('closeoutForm', 'barMerchSales');
    this.barMerchTax$ = this.store.select('closeoutForm', 'barMerchTax');

    this.totalWithdrawal$ = this.store.select('closeoutForm', 'totalWithdrawal');
    this.totalSales$ = this.store.select('closeoutForm', 'totalSales');
    this.bandDeposit$ = this.store.select('closeoutForm', 'bandDeposit');
    this.totalDeposit$ = this.store.select('closeoutForm', 'totalDeposit');
    this.totalExpenses$ = this.store.select('closeoutForm', 'totalExpenses');
    this.totalProfit$ = this.store.select('closeoutForm', 'totalProfit');
    this.submitted$ = this.store.select('closeoutForm', 'submitted');


    this.form = this.formBuilder.group({
      houseCount: [''],
      ticketTurnbacks: [''],
      noShows: [''],
      onlineSales: [''],
      doorSales: [''],
      bandPayment: [''],
      barPayment: [''],
      doorPayment: [''],
      parkingPayment: [''],
      photographyPayment: [''],
      soundPayment: [''],
      otherPayment: [''],
      merchSales: [''],
      posterSales: [''],
      totalWithdrawal: [''],
      barSales: [''],
      barBank: [''],
      bandDeposit: [''],
      totalDeposit: ['']
    });

    this.form.get('houseCount').valueChanges.subscribe(val => {
      this.store.dispatch(new SetHouseCount(val));
    });

    this.form.get('ticketTurnbacks').valueChanges.subscribe(val => {
      this.store.dispatch(new SetTicketTurnbacks(val));
    });

    this.form.get('noShows').valueChanges.subscribe(val => {
      this.store.dispatch(new SetNoShows(val));
    });

    this.form.get('onlineSales').valueChanges.subscribe(val => {
      this.store.dispatch(new SetOnlineSales(val));
    });

    this.form.get('doorSales').valueChanges.subscribe(val => {
      this.store.dispatch(new SetDoorSales(val));
    });

    this.form.get('bandPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetBandPayment(val));
    });

    this.form.get('barPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetBarPayment(val));
    });

    this.form.get('doorPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetDoorPayment(val));
    });

    this.form.get('parkingPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetParkingPayment(val));
    });

    this.form.get('photographyPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetPhotographyPayment(val));
    });

    this.form.get('soundPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetSoundPayment(val));
    });

    this.form.get('otherPayment').valueChanges.subscribe(val => {
      this.store.dispatch(new SetOtherPayment(val));
    });

    this.form.get('merchSales').valueChanges.subscribe(val => {
      this.store.dispatch(new SetMerchSales(val));
    });

    this.form.get('posterSales').valueChanges.subscribe(val => {
      this.store.dispatch(new SetPosterSales(val));
    });

    this.form.get('totalWithdrawal').valueChanges.subscribe(val => {
      this.store.dispatch(new SetTotalWithdrawal(val));
    });

    this.form.get('barBank').valueChanges.subscribe(val => {
      this.store.dispatch(new SetBarBank(val));
    });

    this.form.get('barSales').valueChanges.subscribe(val => {
      if (this.form.get('totalDeposit').value > 0) {
        this.form.get('totalDeposit').setValue(0);
      }
      this.store.dispatch(new SetBarSales(val));
    });

    this.form.get('bandDeposit').valueChanges.subscribe(val => {
      this.store.dispatch(new SetBandDeposit(val));
    });

    this.form.get('totalDeposit').valueChanges.subscribe(val => {
      if (this.form.get('barSales').value > 0) {
        this.form.get('barSales').setValue(0);
      }

      this.store.dispatch(new SetTotalDeposit(val));
    });

  }

  submit() {
    this.store.dispatch(new Submit());
  }

  revise() {
    this.store.dispatch(new Revise());
  }

  setStep(step) {
    this.store.dispatch(new SetStep(step));
  }
}
