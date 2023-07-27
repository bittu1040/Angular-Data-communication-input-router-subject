import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const routes: Routes = [
  { path: 'user/:id', component: Comp2Component },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, HelloComponent, Comp1Component,Comp2Component, Comp3Component, Comp4Component],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule, BrowserModule],
  providers: [DataService],
})
export class AppModule {}
