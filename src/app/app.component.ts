import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
      description: 'Google'
    },
    {
      url: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk',
      description: 'Chrome'
    },
    {
      url: 'https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk',
      description: 'Chrome'
    },
    {
      url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
      description: 'Google'
    }
  ]

}
