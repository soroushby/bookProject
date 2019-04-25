import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from '../model/book';
import { observable } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class AddbooksService {

  constructor(private db: AngularFirestore) {
   }

   addpost(book: Book): Promise<any>{
     return this.db.collection('books').doc(book.id).set({
       id: book.id,
       bookName: book.bookName,
       author: book.author,
       year: book.year,
       category: book.category
     });


   }
   getData() {
    return this.db.collection('books').valueChanges();
   }

}



