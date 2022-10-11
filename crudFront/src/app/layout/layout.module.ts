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
import { StudentsComponent } from './students/students.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatMenuModule,
        FormsModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
    ],
    exports: [
      StudentsComponent,
      ModalComponent
    ],
    declarations: [
      LayoutComponent,
      TopnavComponent,
      StudentsComponent,
      ModalComponent,
    ],
    entryComponents: [ModalComponent],
})
export class LayoutModule {}
