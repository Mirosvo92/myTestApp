import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  months: [{ name: string, amount: number }] = [
    {name: 'January', amount: 0},
    {name: 'February', amount: 0},
    {name: 'March', amount: 0},
    {name: 'April', amount: 0},
    {name: 'May', amount: 0},
    {name: 'June', amount: 0},
    {name: 'July', amount: 0},
    {name: 'August', amount: 0},
    {name: 'September', amount: 0},
    {name: 'October', amount: 0},
    {name:  'November', amount: 0},
    {name: 'December', amount: 0}
  ];

  addSum(valueMonth: HTMLInputElement , value: number, textAllTransactions: HTMLInputElement) {
    // add amount
    this.months[valueMonth.value].amount += Number(value);
    // all operations
    if (!textAllTransactions.value){
      textAllTransactions.value = '';
      textAllTransactions.value +=  ' +' + value;
    }else{
      textAllTransactions.value +=  ' +' + value;
    }
  }

  subtractionSum(valueMonth: HTMLInputElement, value: number, textAllTransactions: HTMLInputElement) {
    // add amount
    this.months[valueMonth.value].amount -= Number(value);
    // all operations
    if (!textAllTransactions.value){
      textAllTransactions.value = '';
      textAllTransactions.value +=  ' -' + value;
    }else{
      textAllTransactions.value +=  ' -' + value;
    }

  }

}
