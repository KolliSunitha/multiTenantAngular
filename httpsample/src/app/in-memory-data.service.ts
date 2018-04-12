import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const values = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Prem' },
        { id: 13, name: 'Bhaskar' },
        { id: 14, name: 'Cristy' },
        { id: 15, name: 'Marry' },
        { id: 16, name: 'Ramya' },
        { id: 17, name: 'Deepti' },
        { id: 18, name: 'Preeti' },
        { id: 19, name: 'Martin' },
        { id: 20, name: 'Trishanka' }
      ];
      return {values};
    }
  }