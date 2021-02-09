import { PopService } from './../services/pop/pop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-new',
  templateUrl: './pop-new.component.html',
  styleUrls: ['./pop-new.component.css']
})
export class PopNewComponent implements OnInit {

  create:boolean = false;

  constructor(
    private PopS: PopService
  ) { }

  public pop:any = {
    edition: null,
    name: null,
    size: null,
    number: null,
    licence: null,
    image: null
  }

  ngOnInit() {
  }

  add(){
    this.PopS.saveNewPop(this.pop).subscribe(()=>{
      this.create = true;
      this.pop = {
        name: null,
        size: null,
        edition: null,
        number: null,
        licence: null,
        image: null
      }
      setTimeout(()=>{
        this.create = false;
      }, 3000);
    })
  }

}
