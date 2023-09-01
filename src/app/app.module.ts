import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { SaluteComponentComponent } from './salute-component/salute-component.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { ChronometerComponentComponent } from './chronometer-component/chronometer-component.component';
import { EventComponentComponent } from './event-component/event-component.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { OutputComponentComponent } from './output-component/output-component.component';
import { NewCronometerComponent } from './new-cronometer/new-cronometer.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ListAddComponent } from './list-add/list-add.component';
import { ListListComponent } from './list-list/list-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { FoodComponent } from './menu-app/food/food.component';
import { InvoiceComponent } from './menu-app/invoice/invoice.component';
import { FatherOututComponent } from './father-outut/father-outut.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    SaluteComponentComponent,
    AddComponentComponent,
    ChronometerComponentComponent,
    EventComponentComponent,
    CalculatorComponentComponent,
    NewCalculatorComponent,
    OutputComponentComponent,
    NewCronometerComponent,
    BindingComponent,
    ListAddComponent,
    ListListComponent,
    CreateTaskComponent,
    ListTaskComponent,
    FoodComponent,
    InvoiceComponent,
    FatherOututComponent
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
