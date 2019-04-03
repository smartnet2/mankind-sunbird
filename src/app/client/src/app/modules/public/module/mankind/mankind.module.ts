import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '@sunbird/telemetry';
import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { NgInviewModule } from 'angular-inport';
import { MankindComponent, AboutusComponent, DashboardMR, DashboardRegionalSalesManager } from './components';
import { EmailInputComponent } from './common/components/email-input/email-input.component';
import { WriteEmailService } from './common/services/email-input/email-input.service';
import { EmailService } from './common/services/email/email.service';
import { DataService } from '../../../core/services/data/data.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    TelemetryModule,
    CoreModule,
    SharedModule,
    NgInviewModule
  ],
  declarations: [MankindComponent, AboutusComponent, DashboardMR, DashboardRegionalSalesManager, EmailInputComponent],
  providers: [DataService, EmailService, WriteEmailService]
})
export class MankindModule { }
