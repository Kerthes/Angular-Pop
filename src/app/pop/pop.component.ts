import { PopService } from './../services/pop/pop.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {

  @Input() popName:string;
  @Input() popEdition:string;
  @Input() popImage:string;
  @Input() popLicence:string;
  @Input() popNumber:number;
  @Input() popSize:string;  
  @Input() id:number;

  @Input() index:number;

  pops:any =[];

  constructor(
    private Pop: PopService
  ) { }

  ngOnInit() {
  }

  supr(){
    this.Pop.delete(this.id);
  }
}
