import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioCollection:AngularFirestoreCollection <Usuario>


  constructor(private db: AngularFirestore) {
    this.usuarioCollection= db.collection('usuario')
  
   }
   obtenerUsuarios(){
    return this.usuarioCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
    
  }
  crearUsuario(nuevoUsuario:Usuario){
    return new Promise(async(resolve, reject)=>{//retorna una nueva promesa, devolviendo un metodo asincrono
      try{// try = intentar 
        const id = this.db.createId() //se crea un id de la base de datos
        nuevoUsuario.idUsuario = id;//el producto sera identificado por su id
        const resultado =await this.usuarioCollection.doc(id).set(nuevoUsuario);//el metodo await espera id del producto dentro del documento de la coleccion, dentro de una constante resultado
        resolve(resultado);//finaliza en un resultado
      }
  
        catch(error){// produce una respuesta si no funciona el metodo anterior
          reject(error);
        }
      })
    }


}
