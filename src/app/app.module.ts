import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { ProgramElementComponent } from './program-element/program-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ProgramElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
