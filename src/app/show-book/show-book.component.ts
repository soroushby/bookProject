import { AddbooksService } from './../services/addbooks.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, observable } from 'rxjs';
import { process, State } from '@progress/kendo-data-query';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})

export class ShowBookComponent implements OnInit,OnDestroy {
  
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    // filter: {
    //   logic: 'and',
    //   filters: [{ field: 'bookName', operator: 'contains', value: 'Chef' }]
    // }
  };

  subs: Subscription;
  data = null;
  public gridData: GridDataResult = null;

  constructor(private ad: AddbooksService) {
    this.subs=new Subscription();
  }


  ngOnInit() {

    this.subs.add(
      this.ad.getData()
      .subscribe(
        (val) => {
          this.data = val;
          this.gridData = process(this.data, this.state);
        },
        (err) => {

        }
      )
    );
  
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.data, this.state);
  }


  ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }

}
