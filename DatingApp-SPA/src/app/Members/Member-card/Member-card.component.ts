import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Member-card',
  templateUrl: './Member-card.component.html',
  styleUrls: ['./Member-card.component.css']
})
export class MemberCardComponent implements OnInit {
@Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
