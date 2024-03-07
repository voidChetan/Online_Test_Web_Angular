import { Component } from '@angular/core';
import { Menu } from 'src/app/core/models/menu_item';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  
})
export class LayoutComponent {
  opened = true;
  hideSHow :boolean= false;

  

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
        // {
        //   title: 'start-test',
        //   icon: 'people',
        //   color: '#ff7f0e',
        //   link: '/start-test',
        // },
        // {
        //   // title: 'Start Test',
        //   // icon: 'people',
        //   // color: '#ff7f0e',
        //   link: '/start-test/:aid/:tid',
        // },
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
        // {
        //   title: 'Add Question',
        //   icon: 'people',
        //   color: '#ff7f0e',
        //   link: '/add-Question',
        // },
      ],
    },
    {
      title: 'Interview',
      icon: 'account_circle',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'New Question',
          icon: 'money',
          link: '/add-interview-Question',
          color: '#ff7f0e',
        },
        {
          title: 'Question List',
          icon: 'people',
          color: '#ff7f0e',
          link: '/interview-Question-list',
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
    // {
    //   title: 'Doubts Class',
    //   icon: 'video_call',
    //   link: '/user',
    //   color: '#ff7f0e',
    // },
    // {
    //   title: 'Enquiry',
    //   icon: 'perm_phone_msg',
    //   link: '/user',
    //   color: '#ff7f0e',
    // },
    // {
    //   title: 'Certificate',
    //   icon: 'verified_user',
    //   link: '/user',
    //   color: '#ff7f0e',
    // }
  ];
  retrievedData:any
  constructor(){
    let storedData = localStorage.getItem('LoggedUserData');

    // Parse the JSON data
    if (storedData) {
      this.retrievedData = JSON.parse(storedData);
    } else {
      this.retrievedData = 'No data found in local storage.';
    }
  }
  toggle(): void {
    this.opened = !this.opened;
  }
 

}
