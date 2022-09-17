import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['navigator.component.css']
})
export class Navigator {
  allData : any = {};
  keysAllData: string[] = []
  transactionCount = 0
  name: string = ""

  isNum(num: any): boolean{
    return Number.isInteger(num)
  }
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['tab']
    })
    this.activatedRoute.data.subscribe(data => {
      this.allData = data;
      this.keysAllData = Object.keys(this.allData)
      for (const key of this.keysAllData) {
        this.transactionCount += this.allData[key].length
      }
    })
  }
}
