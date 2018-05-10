import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BooklistComponent} from './booklist/booklist.component';
import { BookformComponent } from './bookform/bookform.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistService } from './services/booklist.service';
import { BookupdateComponent } from './bookform/bookupdate/bookupdate.component';
import { FormGroup, FormControl, Validators, FormArray,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component'
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
const appRoutes: Routes = [
 // {path:'', component:AppComponent},
{path: 'view', component: BooklistComponent},
{path: 'form', component: BookformComponent},
{path: 'view/:id', component: BookdetailsComponent},
{path: 'update/:id', component: BookupdateComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooklistComponent,
    BookformComponent,
    BookdetailsComponent,
    BookupdateComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [BooklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
