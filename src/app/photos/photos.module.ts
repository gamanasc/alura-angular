import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [ PhotoComponent ], // TORNA O COMPONENTE ACESSÍVEL INTERNAMENTE
  exports: [ PhotoComponent ] // TORNA O COMPONENTE ACESSÍVEL A QUEM O IMPORTAR
})

export class PhotosModule {

}
