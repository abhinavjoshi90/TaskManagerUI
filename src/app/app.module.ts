import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './UI/add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material';
import { UpdateComponent } from './UI/update/update.component';
import { routing } from './app.router';
import { ViewComponent } from 'src/app/UI/view/view.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    routing,
    FormsModule,
    HttpClientModule 
  ],
  exports: [MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
