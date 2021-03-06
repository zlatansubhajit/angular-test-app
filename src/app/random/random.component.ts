import { Component, OnInit } from '@angular/core';
import { DataFileService } from '../data-file.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private _employeeService: DataFileService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployeeData();
    
  }

  addEmployee(e: {name: string, id: string, age: string}) {
   let Id = parseInt(e.id);
   let Age= parseInt(e.age);
   if(e.name === '') {
     alert('Please do not enter blank name');
     return;
   } else {
   this.employees.push({name: e.name, id: Id, age: Age});
   }
  }

  removeEmployee(e: Employee) {
    let idx: number = this.employees.indexOf(e);
    this.employees.splice(idx,1);
  }

}
