import { Injectable } from '@angular/core';
import { BuzoM } from '../models/buzom';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BuzosService {

  private usuarioCollection:AngularFirestoreCollection <BuzoM>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('buzos')
  
   }
   obtenerBuzoM(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
}
