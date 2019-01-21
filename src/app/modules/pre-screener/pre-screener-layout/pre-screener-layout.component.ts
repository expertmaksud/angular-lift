import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ssp-pre-screener-layout',
  templateUrl: './pre-screener-layout.component.html',
  styleUrls: ['./pre-screener-layout.component.scss']
})
export class PreScreenerLayoutComponent implements OnInit {

  isLinear = true;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
