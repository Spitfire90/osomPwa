import { Injectable } from '@angular/core';
import { Observable, Subject, from, pipe, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import Dexie from 'dexie';


@Injectable({
  providedIn: 'root'
})
export class CommonRepositoryService {

  private db: any;
  private visitResultLoaded = new Subject<Visit[]>();

  constructor() {
    this.createDatabase();
   }

  createDatabase() {
    this.db = new Dexie('OSOMobileDatabase');
    this.db.version(1).stores({
      visits: '++id,date,description'
   });
  }

  public addVisit(visit: Visit) {
      this.addToIndexedDb(visit);
  }

  public getAll(): Observable<any> {
    this.getItemsFromIndexedDb();
    return this.visitResultLoaded.asObservable();
  }

  public loadItems(): Observable<Visit[]> {
    const result = this.db.visits.where('id').above(3).toArray();
    const test = of(result).pipe(map(x => Object.assign(new Visit(), x)));
    console.log(test);
    return test;
  }

  public getWhere(): Observable<Visit[]> {
    this.getItemsFromIndexedDbWhere();
    return this.visitResultLoaded.asObservable();
  }

  private addToIndexedDb(visit: Visit) {
    this.db.visits
      .add(visit)
      /*.then(async () => {
        const allItems: Visit[] = await this.db.visits.toArray();
        console.log('saved in DB, DB is now', allItems);
      })*/
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }

  private async getItemsFromIndexedDb() {
    const allItems: Visit[] = await this.db.visits.toArray();
    this.visitResultLoaded.next(allItems);
  }

  private async getItemsFromIndexedDbWhere() {
    const allItems: Visit[] = await this.db.visits.where('id').above(3).toArray();
    this.visitResultLoaded.next(allItems);
  }
}

export class Visit {
  id: number;
  date: Date;
  description: string;

  public get localTime(): string {
    // return this.date.toLocaleTimeString();
    return this.date.toDateString();
  }
}
