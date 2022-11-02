import { Injectable } from '@angular/core';
import { Accesorios } from '../models/accesorios';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {
  private usuarioCollection:AngularFirestoreCollection <Accesorios>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('accesorios')
  
   }
   obtenerAccesorios(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
}
