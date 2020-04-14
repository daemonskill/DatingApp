import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/Auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

// @Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authServices.register(this.model).subscribe(() =>{
      console.log('Registation Successfully');
    }, error =>{
            console.log(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('canceled');
  }

}
