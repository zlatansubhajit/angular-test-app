import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFileService {

  constructor() { }

  getEmployeeData() {
    return [
      {"id": 1, "name": "Subhajit", "age": 24},
      {"id": 2, "name": "abcd", "age": 25},
      {"id": 3, "name": "efgh", "age": 26},
      {"id": 4, "name": "ijkl", "age": 27},
      {"id": 5, "name": "mnop", "age": 28},
      {"id": 6, "name": "qrst", "age": 99}
    ];
    
  }

  getCompanyData() {
    return [
      {"id": 1, "name": "xiomi"},
      {"id": 2, "name": "samsung"},
      {"id": 3, "name": "apple"},
      {"id": 4, "name": "huawei"},
      {"id": 5, "name": "oppo"},
      {"id": 6, "name": "nokia"}
    ];
    
  }

  getCountryData() {
    return [
      {"id": 1, "name": "India", "city": "Delhi"},
      {"id": 2, "name": "USA", "city": "Washington DC"},
      {"id": 3, "name": "Argentina", "city": "Buenos Ares"},
      {"id": 4, "name": "Brasil", "city": "Brasilia"},
      {"id": 5, "name": "Germany", "city": "Berlin"},
      {"id": 6, "name": "England", "city": "London"}
    ];
    
  }

}
