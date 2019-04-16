import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { CommonRepositoryService, Visit } from '../data/common-repository.service';
import { OnlineStatusService } from '../_services/online-status.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visitList: Visit[];

  constructor(private authenticationService: AuthenticationService, private repository: CommonRepositoryService, 
    private readonly onlineStatusService: OnlineStatusService, private snackBar: MatSnackBar) {
    this.registerToEvents(onlineStatusService) 
  }

  private registerToEvents(onlineStatusService: OnlineStatusService) {
    onlineStatusService.connectionChanged.subscribe(online => {
      let message = '';
      if (online) {
        console.log('went online');
        message = 'Application is now online';
      } else {
        console.log('went offline');
        message = 'Application is now offline';
      }

      let config = new MatSnackBarConfig();
      config.verticalPosition = 'bottom';
      config.horizontalPosition = 'center';
      config.duration = 3000;

      this.snackBar.open(message, undefined, config);
    });
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
