import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Book } from '../book.model';
import { BooklistComponent } from '../booklist/booklist.component';
import { BooklistService } from '../services/booklist.service';
import { FormGroup, FormControl, Validators, FormArray,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  constructor(private route: Router,private bls:BooklistService) { }
//    book:Book;
//    bookGenre1='';
//    bookName1='';
//    bookid=3;
//    index=this.index;

//    ngOnInit() {
//     // this.book= this.bls.getBook(2);
//    // this.bookName1 = this.book.name;
//     //this.bookGenre1 = this.book.genre;
//   }
  toUpdateForm(id:number){
 this.route.navigate(['update','1'],{queryParams:{"allowEdit":1}});
  }
//   onAddBook(){
//      this.bls.createBook({name: this.bookName1, genre: this.bookGenre1})

//   }
     addBookForm : FormGroup;
     ngOnInit(){
this.addBookForm= new FormGroup({
 'name': new FormControl(null,Validators.required),
 'author' : new FormControl(null,Validators.required),
 'genre': new FormControl('Fiction'),
 'file':new FormControl([null, Validators.required])
});

     }
    onSubmit(){

      console.log(this.addBookForm);
      this.bls.createBook({name: this.addBookForm.get('name').value,
      author:this.addBookForm.get('author').value, 
      genre: this.addBookForm.get('genre').value,
    file:this.addBookForm.get('file').value })

    }
    onFileChange(event) {
      let reader = new FileReader();
     
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
          this.addBookForm.patchValue({
            file: reader.result
          });
          
          // need to run CD since file load runs outside of zone
         // this.cd.markForCheck();
        };
      }
    }

}


// genders = ['male', 'female'];
// signUpForm : FormGroup;
// ngOnInit(){
// this.signUpForm= new FormGroup({
//   'userData' : new FormGroup({'username': new FormControl(null,Validators.required),
//   'email': new FormControl(null,[Validators.required,Validators.email])}),

// 'gender': new FormControl('female'),
// 'hobbies': new FormArray([])
// });
// }
// onSubmit(){
// console.log(this.signUpForm)
// }
// addHobby(){
//   const control = new FormControl(null, Validators.required);
// (<FormArray>this.signUpForm.get('hobbies')).push(control);

// }
// }
