import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-here-maps',
  templateUrl: './here-maps.component.html',
  styleUrls: ['./here-maps.component.css']
})
export class HereMapsComponent implements OnInit, AfterViewInit {

  private platform: any;

    @ViewChild('map')
    public mapElement: ElementRef;

    public constructor() {
        this.platform = new H.service.Platform({
            'app_id': '8wwCPpXVv3zL8rYpIY3U',
            'app_code': 'gtygmD4WcVMLzc-sybf3UQ'
        });
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        const defaultLayers = this.platform.createDefaultLayers();
        const map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: 48.7416, lng: 7.3622 }
            }
        );

        // Create the default UI:
        H.ui.UI.createDefault(map, defaultLayers);

        // Define a variable holding SVG mark-up that defines an icon image:
        const svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="48" ' +
        'height="48" /><text x="12" y="18" font-size="10pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">O</text></svg>';

        // Create an icon, an object holding the latitude and longitude, and a marker:
        const icon = new H.map.Icon(svgMarkup),
        coords = { lat: 48.7416, lng: 7.3622 },
        marker = new H.map.Marker(coords, {icon: icon});

        // Add the marker to the map and center the map at the location of the marker:
        map.addObject(marker);
        map.setCenter(coords);
    }

}
