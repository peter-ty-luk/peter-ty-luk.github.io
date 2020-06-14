import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import projects from '../../assets/projects.json';
import { ChipInputComponent } from '../chip-input/chip-input.component';
import {MatTableDataSource} from '@angular/material/table';

export interface Project {
  id: string;
  description: string;
  technology:string[]
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements AfterViewInit {  
  filterKeywords:string[];
  displayedColumns: string[] = ['id', 'desc', 'technology'];
  projectsDataSource = new MatTableDataSource(projects);
  @ViewChild(ChipInputComponent) filterComponent;

  constructor() { }

  ngAfterViewInit() {
    this.filterKeywords = this.filterComponent.chipInputs;

    this.projectsDataSource.filterPredicate = (data: Project, filter: string): boolean => {

      let filterStrings = JSON.parse(filter);
      let isFilter = true;
      for (let filterItem of filterStrings) {
        let f = filterItem.text.trim().toLowerCase();
        isFilter = isFilter && data.id.toLowerCase().indexOf(f) !== -1 
          || data.description.toLowerCase().indexOf(f) !== -1 
          || data.technology.filter(x => x.toLowerCase() === f ).length > 0;
        // console.log(filterItem.text);
      }
      return isFilter;
    }
  }

  filterUpdateEvent() {
    this.projectsDataSource.filter = JSON.stringify(this.filterKeywords);
  }

}
