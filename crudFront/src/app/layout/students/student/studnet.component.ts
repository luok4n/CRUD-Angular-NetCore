import { Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

  @Input() producto: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '70%',
    });
  }

}
