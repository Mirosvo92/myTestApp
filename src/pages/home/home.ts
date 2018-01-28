import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShareService} from '../../services/share/share';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController, public navParams: NavParams,public shareService: ShareService, ) {
    this.shareService.setDataList(this.months);
  }

  months: [{ name: string, value: number }] = [
    {name: 'January', value: 0},
    {name: 'February', value: 0},
    {name: 'March', value: 0},
    {name: 'April', value: 0},
    {name: 'May', value: 0},
    {name: 'June', value: 0},
    {name: 'July', value: 0},
    {name: 'August', value: 0},
    {name: 'September', value: 0},
    {name: 'October', value: 0},
    {name:  'November', value: 0},
    {name: 'December', value: 0}
  ];

  addSum(valueMonth: HTMLInputElement , value: number, textAllTransactions: HTMLInputElement) {
    // if value of input is empty
    if (!value) {
      return false;
    }
    // add amount
    this.months[valueMonth.value].value += Number(value);
    // all operations
    if (!textAllTransactions.value){
      textAllTransactions.value = '';
      textAllTransactions.value +=  ' +' + value;
    }else{
      textAllTransactions.value +=  ' +' + value;
    }
    this.shareService.setDataList(this.months);

  }

  subtractionSum(valueMonth: HTMLInputElement, value: number, textAllTransactions: HTMLInputElement) {
    // if value of input is empty
    if (!value) {
      return false;
    }
    // add amount
    this.months[valueMonth.value].value -= Number(value);
    // all operations
    if (!textAllTransactions.value){
      textAllTransactions.value = '';
      textAllTransactions.value +=  ' -' + value;
    }else{
      textAllTransactions.value +=  ' -' + value;
    }
    this.shareService.setDataList(this.months);
  }





}
