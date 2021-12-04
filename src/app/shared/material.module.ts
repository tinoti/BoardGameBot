import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  imports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatIconModule, MatButtonModule,
    MatInputModule, MatCardModule, MatSelectModule, MatExpansionModule, MatDialogModule, MatSnackBarModule, MatSlideToggleModule,
    MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatRippleModule, MatChipsModule, MatMenuModule, MatProgressBarModule,
    ScrollingModule, LayoutModule, MatTooltipModule, OverlayModule, MatProgressSpinnerModule, MatPaginatorModule],
  exports: [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatIconModule, MatButtonModule,
    MatInputModule, MatCardModule, MatSelectModule, MatExpansionModule, MatDialogModule, MatSnackBarModule, MatSlideToggleModule,
    MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatRippleModule, MatChipsModule, MatMenuModule, MatProgressBarModule,
    ScrollingModule, LayoutModule, MatTooltipModule, OverlayModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule],
  declarations: [],
  entryComponents: [

  ]
})
export class CustomMaterialModule { }
