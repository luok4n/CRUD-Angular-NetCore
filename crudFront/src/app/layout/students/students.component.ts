import { Component, OnInit, Input, Inject} from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/students-service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { ErrorComponent } from '../components/error/error.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {

  students: any;

  constructor(private studentService: StudentService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(
        res => {
          this.students = this.mapStudents(res);
        }
      )
  }

  createStudent() {
    var student: Student = {
      Id: 0,
      FirstName: "",
      LastName: "",
      Username: "",
      Age: 0,
      Career: "",
    };
    console.log(student);
    this.openModal(student);
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id)
      .subscribe(
        success  => {
          this.getStudents();
        }, error => {
          this.openError("error deleting the student");
        }
      )
  }

  editStudent(student: Student) {
    this.openModal(student);
  }

  mapStudents(students: any) {
    var studentsList: Array<Student> = [];
    students.forEach((element: { id: number; username: string; firstName: string; lastName: string; age: number; career: string; }) => {
        var student = new Student();
        student.Id = element.id,
        student.Username = element.username,
        student.FirstName = element.firstName,
        student.LastName = element.lastName,
        student.Age = element.age,
        student.Career = element.career

        studentsList.push(student);
        }
    );

    return studentsList;
  }

  openModal(student: Student): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
      data: {student}
    });
  }

  openError(message: string): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      width: '70%',
      data: {message}
    });
  }

}
