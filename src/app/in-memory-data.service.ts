import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11,score:11, name: 'Guybrush Threepwood' },
      { id: 12,score:12, name: 'Gordon Freeman' },
      { id: 13,score:13, name: 'Simon Belmont' },
      { id: 14,score:14, name: 'John Marston' },
      { id: 15,score:15, name: 'Link' },
      { id: 16,score:16, name: 'Jill Valentine' },
      { id: 17,score:17, name: 'Cloud Strife' },
      { id: 18,score:18, name: 'Kratos' },
      { id: 19,score:19, name: 'Master Chief' },
      { id: 20,score:20, name: 'Nathan Drake' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
