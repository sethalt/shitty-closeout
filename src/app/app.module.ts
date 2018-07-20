import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './state/effects';
import { closeoutFormReducer } from './state/closeout-form.reducer';
import { reducers } from './state/reducers';
import { initialState } from './state/initialState';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UpgradeModule, downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

import { CustomRouterStateSerializer } from './utils';



import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';

const modules = [
  StoreDevtoolsModule.instrument({
      maxAge: 100
    }),
  StoreModule.forRoot(reducers, {initialState}),
  EffectsModule.forRoot(effects),
  HttpClientModule,
  CommonModule,
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router',
  }),
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: modules,
  providers: [{provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
