import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(private msg: MyserviceService ) { }

  ngOnInit(): void {
  }
  register(data:any){
    this.msg.reg(data)

  }

}
