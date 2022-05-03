import { Component, OnInit } from '@angular/core';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {
  fileList: NzUploadFile[] = [];


  ngOnInit(): void {
  }

  handleChange(info: NzUploadChangeParam): void {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.fileList = fileList;
  }

}
