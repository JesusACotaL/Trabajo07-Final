import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11,score:11, name: 'Dr Nice' },
      { id: 12,score:12, name: 'Narco Manta' },
      { id: 13,score:13, name: 'Bombasto' },
      { id: 14,score:14, name: 'Celeritas' },
      { id: 15,score:15, name: 'Magneta' },
      { id: 16,score:16, name: 'RubberMan' },
      { id: 17,score:17, name: 'Dynama' },
      { id: 18,score:18, name: 'Dr IQ' },
      { id: 19,score:19, name: 'Magma' },
      { id: 20,score:20, name: 'Tornado' }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
