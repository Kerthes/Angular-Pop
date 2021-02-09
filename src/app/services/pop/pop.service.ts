import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(
    private db: AngularFirestore
  ) { 
    this.getAllPops();
  }
  
  popSubject = new Subject<any[]>();

  private pops = [];

  emitPopSubject(){
    this.popSubject.next(this.pops.slice());
  }

  getPopById(id:number){
    for (const iterator of this.pops) {
      if(iterator.id == id) return iterator;
    }
  }

  getAllPops(){
    return this.db.collection('pop').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.pops = res;
      this.emitPopSubject();
    })
  }

  saveNewPop(pop:any){
    return new Observable(obs => {
      this.db.collection('pop').add(pop).then(()=>{
        console.log('succes');
        obs.next();
      })
    });
  }

  update(pop: any, id:any){
    return new Observable(obs => {
      this.db.doc(`pop/${id}`).update(pop);
      obs.next();
    })
  }

  delete(id: any){
    this.db.doc(`pop/${id}`).delete();
  }
}
