import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShareService} from "../../services/share/share";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage{

  // options for ngx-charts
  data: any[] = [];
  view: any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  animations = false;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService) {}

  // get parameters data: any[] ( months from home page )
  ionViewDidEnter(){
    let dataList = this.shareService.getDataList();
    this.data =  [...dataList];
  }

}
