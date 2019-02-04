import { Component, Renderer2, OnInit } from '@angular/core';
import 'bulma'
import 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'
import 'bulma-extensions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {
  }
  ngOnInit() {
   this.addJsToElement('https://widgets.skyscanner.net/widget-server/js/loader.js').onload = () => {
      console.log('SkyScanner Tag loaded');
    }
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
