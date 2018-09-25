import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

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
  ]
}

export class Project{
  name: string;
  url: string;
}
