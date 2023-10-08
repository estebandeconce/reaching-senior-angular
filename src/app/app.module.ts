import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './components/main/main.component';
import { TemplateComponent } from './components/template/template.component';
import { ModelComponent } from './components/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TemplateComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
