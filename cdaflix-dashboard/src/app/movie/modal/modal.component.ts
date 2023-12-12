import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

    private modalService = inject(NgbModal);
  
    // openBackDropCustomClass(content: TemplateRef<any>) {
    //   this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    // }
  
    // openWindowCustomClass(content: TemplateRef<any>) {
    //   this.modalService.open(content, { windowClass: 'dark-modal' });
    // }
  
    // openSm(content: TemplateRef<any>) {
    //   this.modalService.open(content, { size: 'sm' });
    // }
  
    // openLg(content: TemplateRef<any>) {
    //   this.modalService.open(content, { size: 'lg' });
    // }
  
    openXl(content: TemplateRef<any>) {
      this.modalService.open(content, { size: 'xl' });
    }
  
    // openVerticallyCentered(content: TemplateRef<any>) {
    //   this.modalService.open(content, { centered: true });
    // }
  
    // openScrollableContent(longContent: any) {
    //   this.modalService.open(longContent, { scrollable: true });
    // }
  
    // openModalDialogCustomClass(content: TemplateRef<any>) {
    //   this.modalService.open(content, { modalDialogClass: 'dark-modal' });
    // }
  
}


