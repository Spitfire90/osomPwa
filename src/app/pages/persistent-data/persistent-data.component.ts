import { Component, OnInit } from '@angular/core';
import { CommonRepositoryService, Visit } from 'src/app/data/common-repository.service';
import { CommonService } from 'src/app/_services/common.service';
import { Route } from 'src/app/models/route';

@Component({
  selector: 'app-persistent-data',
  templateUrl: './persistent-data.component.html',
  styleUrls: ['./persistent-data.component.css']
})
export class PersistentDataComponent implements OnInit {

  visitList: Visit[];
  routeList: Route[];

  constructor(private repository: CommonRepositoryService, private service: CommonService) { }

  ngOnInit() {
    this.getAllVisit();
  }

  startSync() {
    console.log('startSync');
    this.service.getRoutesForSync(0).subscribe(
      (r) => {
        this.routeList = r || [];
        console.log(r);
        console.log('end StartSync');
      }, (error) => console.log(error));
  }

  addVisit() {
    const visit = new Visit();
    visit.date = new Date(Date.now());
    visit.description = 'Description';
    // visit.id = 1;
    this.repository.addVisit(visit);
    // this.getAllVisit();
    this.getAllVisit();
  }

  addMultipleVisits() {
    for (let i = 0; i < 1000; i++) {
      this.addVisit();
    }
  }

  getAllVisit() {
    this.repository.getAll().subscribe(
      (r) => { this.visitList = r || [];
      }, (error) => console.log(error));
  }

  getWhereVisit() {
    this.repository.getWhere().subscribe(
      (r) => {
              this.visitList = r || [];
      }, (error) => console.log(error));
  }
}
