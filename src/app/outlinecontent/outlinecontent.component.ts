import { Component, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-outlinecontent',
  templateUrl: './outlinecontent.component.html',
  styleUrls: ['./outlinecontent.component.css']
})
export class OutlineContentComponent implements OnChanges {
  @Input() name!: string;
  @ViewChild('content', { static: false }) contentRef!: ElementRef;

  ngOnChanges() {
    console.log("Selected outline:", this.name);
    if (this.contentRef) {
      this.contentRef.nativeElement.classList.remove('show');
      setTimeout(() => {
        this.contentRef.nativeElement.classList.add('show');
      }, 200); // Mică întârziere pentru efect smooth
    }
  }
}

