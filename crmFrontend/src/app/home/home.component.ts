import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuData: { name: string, url: string, icon: string}[];
  constructor() { }

  ngOnInit() {
    this.menuData = [
      {
        name: 'To Do',
        url: '/todo',
        icon: 'pencil-square-o'
      },
      {
        name: 'Services',
        url: '/services',
        icon: 'gears'
      },
      {
        name: 'National Insurance',
        url: '/nationalinsurance',
        icon: 'globe'
      },
      {
        name: 'Life Insurance',
        url: '/lifeinsurance',
        icon: 'child'
      },
      {
        name: 'LIC - HFL',
        url: '/lichfl',
        icon: 'building'
      },
      {
        name: 'Laughter Theraphy',
        url: '/laughterthreapy',
        icon: 'smile-o'
      },
      {
        name: 'National Insurance-Warning',
        url: '/nationalinsurance/warning',
        icon: 'warning'
      },
      {
        name: 'Customers BirthDays',
        url: '/birthdays',
        icon: 'birthday-cake'
      }
    ];
  }

}
