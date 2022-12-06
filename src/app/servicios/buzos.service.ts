import { Injectable } from '@angular/core';
import { BuzoM } from '../models/buzom';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BuzosService {

  private buzoCollection:AngularFirestoreCollection <BuzoM>


  constructor(private db: AngularFirestore) {
    this.buzoCollection= db.collection('buzos')
  
   }
   obtenerBuzoM(){
    return this.buzoCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
  crearBuzoM(nuevobuzom:BuzoM,url:string){
    return new Promise(async(resolve, reject)=>{
      try{
        const id = this.db.createId()
        nuevobuzom.idProducto = id;
        const resultado =await this.buzoCollection.doc(id).set(nuevobuzom);
        resolve(resultado);
      }
  
        catch(error){
          reject(error);
        }
      })
    }
  
    modificarBuzo(idProducto:string,nuevaData:BuzoM){
     return this.db.collection('buzos').doc(idProducto).update(nuevaData)
  
    }
  
    eliminarBuzo(idProducto:string){
      return new Promise((resolve,reject)=>{
        try {
          const resp = this.buzoCollection.doc(idProducto).delete()
          resolve(resp)
        }
        catch(error){
          reject(error)
        }
      })
    }
}
