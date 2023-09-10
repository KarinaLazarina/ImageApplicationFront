import {Component} from '@angular/core';
import {MessageService} from "primeng/api";
import {FileUploadEvent} from "primeng/fileupload";
import {ImageService} from "../service/image.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [MessageService]
})
export class FileUploadComponent {
  constructor(private messageService: MessageService, private imageService: ImageService) {
  }

  onUpload(event: FileUploadEvent) {
    const formData = new FormData();
    formData.append("image", event.files[0]);
    this.imageService.uploadImage(formData).subscribe(() => {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    });
  }

}
