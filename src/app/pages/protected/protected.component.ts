import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  response: {};

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getTestResponse().subscribe(r => {
      console.log('get response');
      this.response = r;
    });
  }

}
