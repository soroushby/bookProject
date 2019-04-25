import { UUID } from 'angular2-uuid';
import { AddbooksService } from './../services/addbooks.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Book } from '../model/book';


@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {
  bookForm: any;
  constructor(private fb: FormBuilder,
              private ab: AddbooksService) { }


  ngOnInit() {
    this.bookForm = this.fb.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required ],
      category: ['', Validators.required ]
    });
  }

  save() {
    const theBook = new Book(
      UUID.UUID(),
      this.bookForm.get('bookName').value,
      this.bookForm.get('author').value,
      this.bookForm.get('year').value,
      this.bookForm.get('category').value,

    );

    console.log(this.bookForm);
    this.ab.addpost(theBook);
  }

}
