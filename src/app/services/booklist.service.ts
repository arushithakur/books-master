import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Book} from '../book.model'
import { Observable } from 'rxjs/Observable';
import {Order} from '../order'
import 'rxjs/add/operator/map'
@Injectable()
export class BooklistService implements OnInit{
  // url = 'http://localhost:3000';
  // private book : Observable<Book>;
//  private  books : Book[] = this.books = [

//   {id:1,name:'Matilda',author:'Roald Dahl',genre:'Fiction',
//   file:'../../assets/matilda.jpg'},
//   {id:2,name:'The Oath of Vayuputras',author:'Amish Tripathi',genre:'Fiction',
//   file:'../../assets/The_Oath_of_the_Vayuputras.jpg'},
//   {id:3,name:'Nancy Drew',author:'Carolyn Keene',genre:'Fiction',
//   file:'../../assets/nancydrew.jpeg'}
//   ];
private books: Book[];
private book: Book;
  private newBook: Book = {
    id: 7,
    name: '',
    author: '',
   genre: '',
   file: ''
};


  // constructor(private http : HttpClient) {

  // //  new Book(2,'The Oath of VayuPutras','Amish Tripathi','Mythology')
  // }
  constructor(private http: HttpClient) {}
  // Make the HTTP request:

  ngOnInit() {
    // return this.http.get('http://localhost:4200/assets/data.json');
  }

  //  getBooks2()
  //  {
  //     return this.books;
  //  }
    getBooks() {
      //  console.log('Books from service-->',this.books);
      //  return this.books;

//  {
//           return this.http.get(this.url + '')
//             .map(response =>
//               {
//                 console.log("response",response);
//                 return response;
//               }
//               );
//         }
      return this.http.get('http://localhost:4200/assets/data.json');
    }

    getBook(id: number): Book {
      console.log("hey!");
      this.getBooks().subscribe(
        (response: Book[]) => {
          this.books = response;
        console.log('Get book service books-->',this.books);
        }
      
      );
      // if (this.book.id ===id) {
       // var result = this.books.map(a => a.id);
        // this.book = this.books.filter(function(el,i){
        //      if (el.id===id)
        //      return el;
        // })
       return this.books.find(e=>e.id===id)
        // console.log('Returning book--',this.book);
        // return this.book;
     // }
    }

    updateBook(id:number, bookInfo:{name:string,author:string,genre:string, file: string}){
       const book = this.books.find(
       (b)=>{
         return b.id==id;
       })
              if(book){
                book.name = bookInfo.name;
                book.author= bookInfo.author;
                book.genre=bookInfo.genre;
                book.file= bookInfo.file;

                for(let i=0;i<this.books.length;i++)
                {
                  if(this.books[i].id==id)
                 { this.books[i].name = bookInfo.name;
                  this.books[i].genre=bookInfo.genre;
                  this.books[i].author= bookInfo.author;
                  this.books[i].file = bookInfo.file;
                 }
                }
               console.log("After update, books array is:",this.books);
              }

    }

    createBook(bookInfo:{name:string,author:string,genre:string, file:string}){
      // const book = this.books.find(
      //   (b)=>{
      //     return b.name==bookInfo.name;
      //   })
        // if(!book){
          this.newBook={
            id: 0,
            name:'',
            author:'',
           genre:'',
           file:''
        };
          let index = this.books.length+1 ;
         this.newBook.id=index;
          this.newBook.name=bookInfo.name;
          this.newBook.author=bookInfo.author;
          this.newBook.genre=bookInfo.genre;
          this.newBook.file= bookInfo.file;
          console.log("Before--->", this.books);
          this.books.push(this.newBook);
          console.log("After--->", this.books);
          console.log("book pushed-->",this.newBook);
       // }
    }
    removeBook(id: number){
      for(var i = 0; i < this.books.length; i++) {
        var obj = this.books[i];

        if(id == obj.id) {
            this.books.splice(i, 1);
            i--;
        }
    }

    }
  }
