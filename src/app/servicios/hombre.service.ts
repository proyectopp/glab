import { Injectable } from '@angular/core';
import { Hombre } from '../models/hombre';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HombreService {
  private usuarioCollection:AngularFirestoreCollection <Hombre>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('hombre')
  
   }
   obtenerProductoH(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
}
