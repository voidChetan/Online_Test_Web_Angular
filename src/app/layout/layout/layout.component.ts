import { Component } from '@angular/core';
import { Menu } from 'src/app/core/models/menu_item';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  
})
export class LayoutComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'DashBoard',
      icon: 'dashboard',
      link: '/dashboard',
      color: '#ff7f0e',
    },
    {
      title: 'User Manager',
      icon: 'supervised_user_circle ',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Test',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'New Test',
          icon: 'money',
          link: '/new-test',
          color: '#ff7f0e',
        },
        {
          title: 'Assign Test',
          icon: 'people',
          color: '#ff7f0e',
          link: '/assign-test',
        },
        {
          title: 'Student Test',
          icon: 'people',
          color: '#ff7f0e',
          link: '/student-Test',
        },
        {
          title: 'start-test',
          icon: 'people',
          color: '#ff7f0e',
          link: '/start-test',
        },
        {
          // title: 'Start Test',
          // icon: 'people',
          // color: '#ff7f0e',
          link: '/start-test/:aid/:tid',
        },
      ],

    },
    {
      title: 'Question',
      icon: 'account_circle',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'New Question',
          icon: 'money',
          link: '/new-question',
          color: '#ff7f0e',
        },
        {
          title: 'Add Question',
          icon: 'people',
          color: '#ff7f0e',
          link: '/add-Question',
        },
      ],
    },
    {
      title: 'Teacher Manager',
      icon: 'supervisor_account',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
    {
      title: 'Library Manager',
      icon: 'library_books',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
    {
      title: 'Exam',
      icon: 'assignment',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Language Topics',
          icon: 'money',
          link: '/exam/language',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
    {
      title: 'category',
      icon: 'perm_media',
      link: '/category',
      color: '#ff7f0e',
    },
    {
      title: 'profile',
      icon: 'play_circle_filled',
      link: '/profile',
      color: '#ff7f0e',
    },
    {
      title: 'Doubts Class',
      icon: 'video_call',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Enquiry',
      icon: 'perm_phone_msg',
      link: '/user',
      color: '#ff7f0e',
    },
    {
      title: 'Certificate',
      icon: 'verified_user',
      link: '/user',
      color: '#ff7f0e',
    }
  ];

}
