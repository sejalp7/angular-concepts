import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { HostListenBindDirective } from './directives/host-listen-bind.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form/reactive-form.component';
import { CustomPipe } from './customPipe/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    HostListenBindDirective,
    ReactiveFormComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
