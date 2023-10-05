import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { WritersComponent } from './components/writers/writers.component';

const routes: Routes = [
  { path: '', redirectTo: 'writers', pathMatch: 'full' },
  { path: 'writers', component: WritersComponent },
  { path: 'writers/id/:writerId', component: BookListComponent },
  { path: 'writers/country/:writerCountry', component: WritersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
