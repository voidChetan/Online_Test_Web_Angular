import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';

// Angular Material imports
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button'
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { PaginatorModule } from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UserComponent } from './pages/user/user.component';
import { NewTestComponent } from './pages/new-test/new-test.component';
import { NewQuestionComponent } from './pages/new-question/new-question.component';
// import { LayoutComponent } from './pages/layout/layout.component';
import { AssignedTestComponent } from './pages/assigned-test/assigned-test.component';
import { QueInterviewComponent } from './pages/que-interview/que-interview.component';
import { StudentTestComponent } from './pages/student-test/student-test.component';
import { StartTestComponent } from './pages/start-test/start-test.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { LayoutComponent } from './layout/layout/layout.component'
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
    QueInterviewComponent,
    StudentTestComponent,
    StartTestComponent,
    ProfileComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
    SideNavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    ToastModule,
    MessagesModule,
    BrowserAnimationsModule,
    DropdownModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,

    TableModule


    MatPaginatorModule,
    MatTableModule,

  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
