import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { LayoutComponent } from './pages/layout/layout.component';


import { UserComponent } from './pages/user/user.component';
import { NewTestComponent } from './pages/new-test/new-test.component';
import { NewQuestionComponent } from './pages/new-question/new-question.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AssignedTestComponent } from './pages/assigned-test/assigned-test.component';
import { QueInterviewComponent } from './pages/interviewQuestions/que-interview/que-interview.component';
import { StudentTestComponent } from './pages/student-test/student-test.component';
import { StartTestComponent } from './pages/start-test/start-test.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { InterviewQuestionListComponent } from './pages/interviewQuestions/interview-question-list/interview-question-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'new-test',
        component: NewTestComponent,
      },
      {
        path: 'new-question',
        component: NewQuestionComponent,
      },
      {
        path: 'category',
        component: CategoriesComponent,
      },
      {
        path: 'assign-test',
        component: AssignedTestComponent,
      },
      {
        path: 'interview-Question-list',
        component: InterviewQuestionListComponent,
      },
      {
        path: 'add-interview-Question',
        component: QueInterviewComponent,
      },
      {
        path: 'student-Test',
        component: StudentTestComponent,
      },
      {
        path: 'start-test',
        component: StartTestComponent,
      },
      {
        path: 'start-test/:aid/:tid',
        component: StartTestComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
