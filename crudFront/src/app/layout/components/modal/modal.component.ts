import { Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/students-service';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  studentForm = this.formBuilder.group({
    Id: '',
    FirstName: '',
    LastName: '',
    Username: '',
    Age: '',
    Career: '',
  });

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, 
    private studentService: StudentService,
    public dialog: MatDialog) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    this.studentForm.setValue({
      Id: this.data.student.Id,
      FirstName: this.data.student.FirstName,
      LastName: this.data.student.LastName,
      Username: this.data.student.Username,
      Age: this.data.student.Age,
      Career: this.data.student.Career
    })
  }

  saveStudent() {
    if (this.studentForm.value.Id == "0") {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        success => {
          window.location.reload();
        }, error => {
          this.openError("Error saving the student");
  
        }
      );
    } else {
      this.studentService.updateStudent(this.studentForm.value).subscribe(
        success => {
          window.location.reload();
        }, error => {
          this.openError("Error saving the student");
  
        }
      );
    }
  }

  openError(message: string): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      width: '70%',
      data: {message}
    });
  }

}
