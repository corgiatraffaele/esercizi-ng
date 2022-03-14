import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student: Student={
    id: 1,
    name: 'Raffaele'
  }
  selectedStudent: Student | undefined;

  constructor() { }

  ngOnInit(): void {
  }


}
