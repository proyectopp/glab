import { Injectable } from '@angular/core';
import { Mujer } from '../models/mujer';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MujerService {
  private usuarioCollection:AngularFirestoreCollection <Mujer>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('mujer')
  
   }
   obtenerProductoM(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
}
