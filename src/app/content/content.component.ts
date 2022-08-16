import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

export interface PeriodicElement {
  supplier_name: string;
  part_number: number;
  number_of_parts: number;
  livis_certified: boolean;
  last_updated: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  carData: any;
  selected: any = {};
  selected2: any = {};
  constructor(
    private appSettingsService : AppServiceService
  ){}
  
  displayedColumns: string[] = ['part_number', 'supplier_name', 'number_of_parts', 'livis_certified', 'last_updated'];
  dataSource = this.selected2.value;
  ngOnInit(): void {
    this.appSettingsService.getJSON().subscribe(data => {
      console.log(data);
      console.log(this.selected2.value);
      
      this.carData = data;
     });
}
}

