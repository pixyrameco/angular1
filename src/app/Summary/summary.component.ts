import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class Summary{
  allData : any = {};
  keysAllData: string[] = []
  transactionCount = 0
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.allData = data;
      this.keysAllData = Object.keys(this.allData)
      for (const key of this.keysAllData) {
        this.transactionCount += this.allData[key].length
      }
    })
  }
}
