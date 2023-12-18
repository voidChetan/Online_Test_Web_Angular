import { EditorModule } from 'primeng/editor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import{ HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { NewTestComponent } from './pages/new-test/new-test.component';
import { NewQuestionComponent } from './pages/new-question/new-question.component';



import { LayoutComponent } from './pages/layout/layout.component';
import { AssignedTestComponent } from './pages/assigned-test/assigned-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    UserComponent,
    NewTestComponent,
    NewQuestionComponent,
    LayoutComponent,
    AssignedTestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
