import { PopService } from './../services/pop/pop.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.css']
})
export class PopListComponent implements OnInit,OnDestroy {

  pops:any = []
  popSubscription: Subscription;

  constructor(
    private Pop: PopService
  ) { }

  ngOnInit() {
    this.popSubscription = this.Pop.popSubject.subscribe((listPop) => {
      this.pops = listPop;
      console.log(listPop);
    });
    this.Pop.emitPopSubject();
  }

  ngOnDestroy(){
    this.popSubscription.unsubscribe();
  }

}
