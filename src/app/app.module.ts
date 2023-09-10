import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ImageCarouselComponent} from './image-carousel/image-carousel.component';
import {CarouselModule} from "primeng/carousel";
import {FileUploadModule} from 'primeng/fileupload';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    FileUploadModule,
    ToastModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
