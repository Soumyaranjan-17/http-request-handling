// src/app/components/data-display/data-display.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  data: any[] = [];
  errorMessage: string = '';
  sortDirection: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  sortData(): void {
    this.data.sort((a, b) => {
      if (this.sortDirection) {
        return a.name.localeCompare(b.name); // Sorting by 'name'
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    this.sortDirection = !this.sortDirection;
  }
}
