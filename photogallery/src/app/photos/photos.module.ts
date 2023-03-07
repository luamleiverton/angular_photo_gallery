import { NgModule } from "@angular/core";
import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";

@NgModule({
  declarations: [],
  imports: [ PhotoModule, PhotoListModule, PhotoFormModule ],
  exports:  []
})
export class PhotosModule{}