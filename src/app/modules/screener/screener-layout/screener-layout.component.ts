import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ssp-screener-layout',
  templateUrl: './screener-layout.component.html',
  styleUrls: ['./screener-layout.component.scss']
})
export class ScreenerLayoutComponent implements OnInit {

  isLinear = true;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
