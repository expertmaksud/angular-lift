import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';


import { ScreenerResourcesGridComponent } from './screener-resources-grid/screener-resources-grid.component';
import { LookupService } from '@app/core';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'ssp-screener-resources',
  templateUrl: './screener-resources.component.html',
  styleUrls: ['./screener-resources.component.scss'],
  providers: [ConfirmationService]
})
export class ScreenerResourcesComponent implements OnInit {

  mortgages: boolean;
  retirement: boolean;
  money: boolean;

  index = 0;
  componentsReferences = [];

  resourceTypesdata = [];




  @ViewChild('dynamicGrid', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private _factoryResolver: ComponentFactoryResolver, private _lookupService: LookupService,
    private _confirmationService: ConfirmationService) { }

  ngOnInit() {
   this.initLokup();
  }

  private initLokup(): void {
    this._lookupService.getResourceTypes().subscribe(result => {
      this.resourceTypesdata = result;
    });
  }


  onChange(event, index, item) {
    item.value = !item.value;

    if (item.name === 'None of the Above') {
      return;
    }

    if (item.value) {
      this.addDynamicGridComponent(item.id, item.name);
    } else {
      this._confirmationService.confirm({
        message: 'All the record(s) will be deleted. Do you wish to continue?',
        accept: () => {
          this.removeGridComponent(item.id);
        },
        reject: () => {
          item.value = !item.value;
        }
      });

    }

  }

  public addDynamicGridComponent(resourceTypeId, resourceTypeName) {

    const factory = this._factoryResolver.resolveComponentFactory(ScreenerResourcesGridComponent);

    const componentRef: ComponentRef<ScreenerResourcesGridComponent> = this.viewContainerRef.createComponent(factory);
    const currentComponent = componentRef.instance;
    currentComponent['resourceTypeId'] = resourceTypeId;
    currentComponent['resourceType'] = resourceTypeName;

    // const component = factory.create(this.viewContainerRef.parentInjector);

    // this.viewContainerRef.insert(component.hostView);

    currentComponent.selfRef = currentComponent;
    currentComponent.index = resourceTypeId;
    // currentComponent.compInteraction = this;

    this.componentsReferences.push(componentRef);
  }

  removeGridComponent(index: number) {

    if (this.viewContainerRef.length < 1) {
      return;
    }

    const componentRef = this.componentsReferences.filter(x => x.instance.index === index)[0];
    const component: ScreenerResourcesGridComponent = <ScreenerResourcesGridComponent>componentRef.instance;

    const vcrIndex: number = this.viewContainerRef.indexOf(componentRef);

    // removing component from container
    this.viewContainerRef.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

}
