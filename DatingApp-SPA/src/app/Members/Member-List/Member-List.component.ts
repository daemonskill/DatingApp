import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Member-List',
  templateUrl: './Member-List.component.html',
  styleUrls: ['./Member-List.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

 constructor(private userservice: UserService, private alertify: AlertifyService , private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.route.data.subscribe(data =>{
      // tslint:disable-next-line: no-string-literal
      this.users = data['users'];
    });
  }
 /* loadUser()
  {
    this.userservice.getUsers().subscribe((users: User[]) => {
    this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }*/

}
