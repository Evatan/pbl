import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from "../../domain/quote.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quote = {
    cn:'从一个有意义的问题出发，遇到一群志同道合的人。',
    en: '项目教学法就是在老师的指导下,将一个相对独立的项目交由学生自己处理，信息的收集、方案的设计、项目实施及最终评价,都由学生自己负责。',
    pic: 'assets/cooperation.png'
  };
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(q => this.quote = q);
   }

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl('evatanjia@sina.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', Validators.required)
    // });
    this.form = this.fb.group({
      email: ['evatanjia@sina.com', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  onSubmit({value, valid}, ev: Event){
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(valid);
  }

}
