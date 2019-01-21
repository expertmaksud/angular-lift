import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ssp-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {

  selectedScreener: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onContinueClick(): void {
    if (this.selectedScreener === 0) {
      this.router.navigate(['/screener']);

    } else if (this.selectedScreener === 1) {
      this.router.navigate(['/prescreener']);
    }
  }

}
