import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Errors, LookupService, Lookup } from '@app/core';


@Component({
  selector: 'ssp-pre-screener-home',
  templateUrl: './pre-screener-home.component.html',
  styleUrls: ['./pre-screener-home.component.scss']
})
export class PreScreenerHomeComponent implements OnInit {

  taxStatus: Lookup[];
  livingArrangements: Lookup[];
  states: Lookup[];
  filteredOptions: Observable<Lookup[]>;

  homeFormGroup: FormGroup;
  totalPersonCtrl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(21)]);
  under19PersonCtrl = new FormControl('', Validators.required);
  btw19to59PersonCtrl = new FormControl('', Validators.required);
  over60PersonCtrl = new FormControl('', Validators.required);
  firstNameCtrl = new FormControl('', Validators.required);
  lastNameCtrl = new FormControl('', Validators.required);
  middleNameCtrl = new FormControl('', []);
  genderCtrl = new FormControl('', Validators.required);
  ageCtrl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(120)]);
  taxStatusCtrl = new FormControl('', Validators.required);
  livingCtrl = new FormControl('', Validators.required);
  stateCtrl = new FormControl('', Validators.required);


  constructor(private _formBuilder: FormBuilder, private _lookupService: LookupService) { }

  ngOnInit() {

    this.initControl();
    this.initLookupData();

  }

  private initControl() {
    this.homeFormGroup = this._formBuilder.group({
      totalPersonCtrl: this.totalPersonCtrl,
      under19PersonCtrl: this.under19PersonCtrl,
      btw19to59PersonCtrl: this.btw19to59PersonCtrl,
      over60PersonCtrl: this.over60PersonCtrl,
      firstNameCtrl: this.firstNameCtrl,
      lastNameCtrl: this.lastNameCtrl,
      middleNameCtrl: this.middleNameCtrl,
      genderCtrl: this.genderCtrl,
      ageCtrl: this.ageCtrl,
      taxStatusCtrl: this.taxStatusCtrl,
      livingCtrl: this.livingCtrl,
      stateCtrl: this.stateCtrl
    });
  }
  private initLookupData() {
    this._lookupService.getStates().subscribe(result => {
      this.states = result;
      this.filteredOptions = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(value => value ? this._filter(value) : this.states.slice())
        );
    });

    this._lookupService.getTaxStatus().subscribe(result => {
      this.taxStatus = result;
    });

    this._lookupService.getLivingArrangements().subscribe(result => {
      this.livingArrangements = result;
    });

  }
  private _filter(value: string): Lookup[] {

    const filterValue = value.toLowerCase();

    return this.states.filter(option => option.name.toLowerCase().includes(filterValue));
  }


}
