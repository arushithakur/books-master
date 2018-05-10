import { Component, OnInit } from '@angular/core';
import {BooklistService} from '../../services/booklist.service';
import {Book} from '../../book.model'
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray,ReactiveFormsModule } from '@angular/forms';
 
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css'],
  template: `<ng4-loading-spinner> </ng4-loading-spinner>`,
  providers:[Ng4LoadingSpinnerService]
})
export class BookupdateComponent implements OnInit {
  // book:Book;
  //  bookName ='';
  //  bookGenre=''; 
  book: Book;
   constructor(private bls:BooklistService,
    private route: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  // ngOnInit() {

  //   this.book = this.bls.getBook(1);
  //   this.bookName = this.book.name;
  //   this.bookGenre = this.book.genre;
  //   this.route.queryParams.subscribe();
  // }
  // onUpdateBook(){
  //   this.bls.updateBook(this.book.id, {name: this.bookName, genre: this.bookGenre});
  //    console.log(this.book);
  // }
  loaderDisplay= false;
  updateBookForm : FormGroup;
  ngOnInit(){
 let  id = this.route.snapshot.params['id'];
 console.log("Id---->>",id);
   this.book = this.bls.getBook(id);
   console.log('Book here is:', this.book);
this.updateBookForm= new FormGroup({
'name': new FormControl(this.book.name),
'author' : new FormControl(this.book.author),
'genre': new FormControl(this.book.genre),
'file': new FormControl(this.book.file)
});


  }
 onSubmit(){
 // this.loaderDisplay = true; 
  this.spinnerService.show();
    
  setTimeout(function() {
    this.spinnerService.hide();
  }.bind(this), 4000);
   console.log(this.updateBookForm);
   this.bls.updateBook(this.book.id, {name: this.updateBookForm.get('name').value,
   author : this.updateBookForm.get('author').value,
    genre: this.updateBookForm.get('genre').value,
    file: this.updateBookForm.get('file').value
  });
 }

 onFileChange(event) {
  let reader = new FileReader();
 
  if(event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      this.updateBookForm.patchValue({
        file: reader.result
      });
      
      // need to run CD since file load runs outside of zone
     // this.cd.markForCheck();
    };
  }
}
}
