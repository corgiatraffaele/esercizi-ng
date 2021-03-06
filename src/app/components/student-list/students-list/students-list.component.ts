import { Component, OnInit } from '@angular/core';
import { STUD } from '../../mock-data/students';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = STUD;
  selectedStud?: Student; 
  selectedStudent: Student | undefined 


  constructor() { }

  ngOnInit(): void {
  }


}
