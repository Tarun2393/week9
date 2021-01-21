import { Component } from '@angular/core';

@Component({
  selector: 'app-annuity',
  templateUrl: './annuity.component.html',
  styleUrls: ['./annuity.component.css']
})
export class AnnuityComponent {

  annuity: number;
  interestRate: number;
  period: number;
  ammount: number;
  
  ammountCalculator() {
    
    this.ammount = this.annuity * (((1 + (this.interestRate / 12)) ** (12 * this.period)) - 1) / (this.interestRate / 12) * (1 + (this.interestRate / 12));
  }


}
