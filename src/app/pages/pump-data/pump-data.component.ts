import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pump-data',
  templateUrl: './pump-data.component.html',
  styleUrls: ['./pump-data.component.css']
})
export class PumpDataComponent implements OnInit {

  content: string;

  constructor() { }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file, 'ISO-8859-1');

      reader.onload = () => {
        this.content = reader.result.toString();
      };
    }
  }

}
