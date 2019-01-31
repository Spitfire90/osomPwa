import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { CommonRepositoryService, Visit } from '../data/common-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visitList: Visit[];

  constructor(private authenticationService: AuthenticationService, private repository: CommonRepositoryService) { 
  }

  ngOnInit() {
    this.getWhereVisit();
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }

  addVisit() {
    let visit = new Visit();
    visit.date = new Date(Date.now());
    visit.description = "Description";
    this.repository.addVisit(visit);
    this.getAllVisit();
  }

  addMultipleVisits() {
    for (let i = 0; i < 5; i++) {
      let visit = new Visit();
      visit.date = new Date(Date.now());
      visit.description = "Description";
      this.repository.addVisit(visit);
    }
    console.log("end addMultipleVisits");
  }

  getAllVisit() {
    this.repository.getAll().subscribe(
      (r) => { this.visitList = r || [];
      }, (error) => console.log(error));
  }

  getWhereVisit() {
    this.repository.getWhere().subscribe(
      (r) => this.visitList = r || []
      , (error) => console.log(error));
  }

  public get UserName(): string {
    return this.authenticationService.userName;
  }
}
