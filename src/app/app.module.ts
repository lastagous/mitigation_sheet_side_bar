import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { AppComponent } from './app.component';
import { JobStore } from './store/job.store';
import { SelectJobComponent } from './component/select-job/select-job.component';
import { GasStore } from './store/gas.store';
import { HideAaComponent } from './component/hide-aa/hide-aa.component';
import { PrintMitigationComponent } from './component/print-mitigation/print-mitigation.component';
import { DownloadSpespeComponent } from './component/download-spespe/download-spespe.component';
import { GenerateSheetComponent } from './component/generate-sheet/generate-sheet.component';
import { JobIconComponent } from './component/job-icon/job-icon.component';
import { SelectSkillComponent } from './component/select-skill/select-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadSpespeComponent,
    HideAaComponent,
    PrintMitigationComponent,
    SelectJobComponent,
    GenerateSheetComponent,
    JobIconComponent,
    SelectSkillComponent,
  ],
  imports: [
    BlockUIModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    DynamicDialogModule,
    DividerModule,
    FormsModule,
    PanelModule,
    ProgressSpinnerModule,
    RippleModule,
    SelectButtonModule,
    ScrollPanelModule,
    ToastModule,
  ],
  providers: [GasStore, JobStore, DialogService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
