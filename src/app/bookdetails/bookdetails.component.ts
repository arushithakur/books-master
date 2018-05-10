import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';
import {BooklistService} from '../services/booklist.service'

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookListService: BooklistService) {

     
   }
   book: Book;
   //books: Book[];
   bookId: number;

  ngOnInit() {


  this.route.paramMap.subscribe(params=>{
     this.bookId = +params.get('id');
     console.log("Book details id:-",this.bookId);
      this.book= this.bookListService.getBook(this.bookId);

  })
  }
}




