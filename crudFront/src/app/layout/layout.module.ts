import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentComponent } from './students/student/studnet.component';
import { StudentsComponent } from './students/students.component';
import { ModalComponent } from './students/student/modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatTooltipModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatSelectModule,
        MatDialogModule
    ],
    exports: [
      StudentComponent,
      StudentsComponent,
      ModalComponent
    ],
    declarations: [
      LayoutComponent,
      TopnavComponent,
      StudentComponent,
      StudentsComponent,
      ModalComponent,
    ],
    entryComponents: [ModalComponent],
})
export class LayoutModule {}
