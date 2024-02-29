import { HttpEventType } from '@angular/common/http';
import { Injectable, Input, OnInit } from '@angular/core';
import { Event } from '../../models/Event';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  file!:File

  constructor() { }

  onChange(event:Event<any>) {
    if(event.target.files){
      this.file = event.target.files[0] 
    }
    console.log("file : "+this.file)
  }

  displayUploadedImg() {

  }
}
