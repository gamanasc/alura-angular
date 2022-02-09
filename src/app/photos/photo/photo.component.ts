import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  // INPUT() INDICA QUE PODERÁ RECEBER VALOR DO HTML
  @Input() description = '';
  @Input() url = '';
}
