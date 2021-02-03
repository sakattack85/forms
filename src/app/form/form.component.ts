import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@ViewChild('myform') myform:NgForm|undefined;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>
    this.myform.setValue({email:"hi@com",password:"123", 
    remember:true,gender:"male",role:"commitee"}))
  }

}
