import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';


const URL = 'http://localhost:62606/api/docfile';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private fileUpload: FileUploadService) { }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      this.fileUpload.OnUpload(URL, formData);

    }
    window.location.reload();
  }

  ngOnInit() {
  }

}
