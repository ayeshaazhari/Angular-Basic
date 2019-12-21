import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoApp } from './demo-app.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemoService } from './demo-service.service';
import { DatabindingComponent } from './databinding/databinding.component';
import { ClassworkbindingComponent } from './classworkbinding/classworkbinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ClipipePipe } from './clipipe.pipe';
import { ZodiacpipePipe } from './zodiacpipe.pipe';
import { ClipparaPipe } from './clippara.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoApp,
    Demo2Component,
    DatabindingComponent,
    ClassworkbindingComponent,
    PipesComponent,
    ClipipePipe,
    ZodiacpipePipe,
    ClipparaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
