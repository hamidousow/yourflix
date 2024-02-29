import { Component, Input } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { Event } from '../../../models/Event';
import { NgForm, FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../../../services/movie-service/movie.service';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.scss'
})
export default class FormCreateComponent {

  @Input()
  file!: File

  @Input()
  srcPreviewImg!: string

  myFormGroup = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    img: new FormControl()
  })

  constructor(private movieService: MovieService) {}
  
  onSubmit(myForm: FormGroup) {
    this.movieService.create(myForm.value).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    })
  }

  showPreview(event:Event<any>) {
    if(event.target.files){
      this.file = event.target.files[0]
      this.srcPreviewImg = URL.createObjectURL(event.target.files[0]);
      this.myFormGroup.get('img')?.setValue(this.file)
    }
  }

}
