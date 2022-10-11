import { Component, OnInit, Input, Inject} from '@angular/core';

export interface Student {
  Id: number;
  Username: string;
  FirstName: string;
  SecondName: string;
  Age: number;
  Career: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {

  students: Student[] = [{Id: 1, Username: "test", FirstName: "Juan", SecondName:"Perez", Age: 10, Career: "test"}]

  constructor() {
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    
  }

  deleteStudent(id: any) {
    console.log(id);
  }

  editStudent(student: Student) {
    console.log(student);
  }

  

}
