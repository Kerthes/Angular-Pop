import { PopService } from './../services/pop/pop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pop-modif',
  templateUrl: './pop-modif.component.html',
  styleUrls: ['./pop-modif.component.css']
})
export class PopModifComponent implements OnInit {

  pop : any;
  change: boolean = false;
  id: any;
  
  constructor(
    private Pop : PopService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = this.Pop.getPopById(id).id;
    this.pop = this.Pop.getPopById(id).data;
  }

  modif(){
    this.Pop.update(this.pop,this.id).subscribe(()=>{
      this.change = true;
      setTimeout(()=>{
        this.change = false;
      }, 3000);
    })
  }

}
