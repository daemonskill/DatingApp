import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/Auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

// @Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authServices: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authServices.register(this.model).subscribe(() =>{
      this.alertify.success('Registation Successfully');
    }, error =>{
            this.alertify.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.message('canceled');
  }

}
