import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit{

  chart: Chart=null;    

  projects: Project[]=[
    {
      name: 'Orion Mobile',
      url: 'https://wallpapershome.com/images/pages/ico_h/11998.jpg'
    },
    {
      name: 'Orion Web Site',
      url: 'http://www.oetpo.org/opphotos/big/15/159890_mac-wallpaper-4k.jpg'
    },
    {
      name: 'Orion Quotation',
      url:'https://wallpapersultra.net/wp-content/uploads/Free-Mac-Wallpaper-Full-HD-1080p-800x450.jpg'
    }
  ];  

  constructor() { }

  ngOnInit() {
    let chart: Chart = new Chart('chart',{
      type: 'horizontalBar',
      data: {
        labels: ["C#","Xamarin", "Kotlin", "Angular", "Html", "Css", "Python",".Net Core"],
        datasets: [{
          label: 'Skills',
          data: [90, 90, 70, 80, 75, 75,60, 75,0,100],
          backgroundColor: [
            'rgb(0,91,151)', //c#
            'rgba(54, 162, 235, 0.2)', //xamarin
            'rgba(153, 102, 255, 0.2)', //kotlin
            'rgb(204,23,21)', //angular
            'rgba(255, 159, 64, 0.2)', //html
            'rgb(1, 120, 199)', //css
            'rgb(199, 179, 1)', //python
            'rgb(100,95,159)' //.net core            
          ],
          borderColor: [
            'rgb(0,91,151)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgb(204,23,21)',
            'rgba(255, 159, 64, 0.2)',
            'rgb(1, 120, 199)',
            'rgb(199, 179, 1)',
            'rgb(100,95,159)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}

export class Project{
  name: string;
  url: string;
}
