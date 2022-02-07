import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  title = 'electronProj';
  validate: boolean = false;
  cardName: any = '';
  cardNumber: string = '';
  total: any;
  validation() {
    var total1 = 0;
    var total2 = 0;
    var evenList = [];
    var oddList: any = [];
    var numbers: any = [];
    for (let index = 0; index <= this.cardNumber.length; index++) {
      if(index % 2 == 1) {
       oddList.push(parseInt(this.cardNumber[index]));
      }
    }
    oddList.forEach((element: number) => {
      total2 += element;
    });

    for (let index = 0; index < this.cardNumber.length; index++) {
      if(index %2 == 0) {
        evenList.push(parseInt(this.cardNumber[index])*2);
      }
    }
    evenList.forEach(element => {
      if(element >= 10) {
        var t = element.toString();
        numbers.push(t.charAt(0).toString());
        numbers.push(t.charAt(1).toString());
      }else {
        numbers.push(element.toString());
      }
      
    });
    
    numbers.forEach((element: string) => {
      total1 += parseInt(element);
    });

    this.total= total1+total2;

    if (this.total % 10 == 0) {
      this.validate = true;
    }
    else {
      this.validate = false;
    }
    
}
  constructor() { }

  ngOnInit(): void {
  }

}
