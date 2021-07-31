import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatFirestoreComponent } from './pages/chat-firestore/chat-firestore.component';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatFirestoreComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
