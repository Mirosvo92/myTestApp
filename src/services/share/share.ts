import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  data: [{ name: string, value: number }] ;
  constructor() {}

  setDataList(arr: [{ name: string, value: number }]){
    this.data = arr;
  }

  getDataList(){
    return  this.data;
  }

}
