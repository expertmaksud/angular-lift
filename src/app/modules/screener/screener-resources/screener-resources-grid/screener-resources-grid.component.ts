import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Resource, ScreenerResourceService, Lookup } from '@app/core';
import { ConfirmationService } from 'primeng/api';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { LookupService } from '@app/core';

@Component({
  selector: 'ssp-screener-resources-grid',
  templateUrl: './screener-resources-grid.component.html',
  styleUrls: ['./screener-resources-grid.component.scss'],
  providers: [ConfirmationService]
})
export class ScreenerResourcesGridComponent implements OnInit {

  cols: any[];
  resources: Resource[];
  owners: any[];
  singleOrJoint: any[];
  selectedColumns: any[];


  resource: Resource = {} as any;

  selectedResource: Resource;

  newResource: boolean;

  displayDialog: boolean;

  formTitle: string;

  resourceFormGroup: FormGroup;

  public index: number;
  public selfRef: ScreenerResourcesGridComponent;

  @Input() resourceTypeId: number;
  @Input() resourceType: string;

  constructor(private _screenerResourceService: ScreenerResourceService, private _confirmationService: ConfirmationService,
    private _formBuilder: FormBuilder, private _lookupService: LookupService) { }

  ngOnInit() {
    this.getResources();

    this.cols = [
      { field: 'owns', header: 'Who owns?*' },
      { field: 'worth', header: 'How much is the resource worth?*' },
      { field: 'isSingle', header: 'Single/Joint owner*' },
      { field: 'bankName', header: 'Bank/Institution Name*' },
      { field: 'acNumber', header: 'Account Number' },
      { field: 'location', header: 'Location' }
    ];

    this.selectedColumns = this.cols;

    this.initControl();

    this.owners = [{ id: 1, label: 'John Snow', value: 'John Snow' },
    { id: 2, label: 'John Smith', value: 'John Smith' },
    { id: 3, label: 'Maria', value: 'Maria' }];

    this.singleOrJoint = [{ id: 1, label: 'Single', value: 'true' },
    { id: 2, label: 'Joint', value: 'false' }];

  }

  private initControl() {
    this.resourceFormGroup = this._formBuilder.group({
      owns: new FormControl('', [Validators.required]),
      worth: new FormControl('', [Validators.required]),
      isSingle: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      acNumber: new FormControl('', []),
      location: new FormControl('', [])
    });
  }

  editResource(resource: Resource): void {
    this.newResource = false;
    debugger
    this.selectedResource = resource;
    this.resourceFormGroup.patchValue(resource);
    this.formTitle = 'Edit :';
    this.displayDialog = true;
  }

  deleteResource(resource: Resource): void {

    this._confirmationService.confirm({
      message: 'Are you sure that you want to delete ' + this.resourceType + ' resource?',
      accept: () => {
        const index = this.resources.indexOf(resource);
        this.resources = this.resources.filter((val, i) => i !== index);
        this.resource = null;
        this.displayDialog = false;
      }
    });

  }

  showDialogToAdd(): void {
    this.newResource = true;

    this.resource = {} as any;
    this.formTitle = 'Add New :';
    this.displayDialog = true;
  }

  cancel(): void {
    this.resourceFormGroup.reset();
    this.displayDialog = false;
  }

  save(): void {

    this.resource = Object.assign({}, this.resourceFormGroup.value);

    if (this.newResource) {
      this.resources.push(this.resource);
    } else {
      const selectedIndex = this.resources.indexOf(this.selectedResource);
      this.resources[selectedIndex] = this.resource;
    }

    this.resource = {} as any;
    this.resourceFormGroup.reset();
    this.displayDialog = false;
  }

  onSubmit(resourceFormGroup): void {
    console.log(resourceFormGroup);
  }

  private getResources(): void {
    this._screenerResourceService.getResourcesByType(this.resourceTypeId).subscribe(result => {
      this.resources = result;
    });
  }

}
