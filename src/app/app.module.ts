import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsListComponent } from './components/student-list/students-list/students-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //importato per ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
