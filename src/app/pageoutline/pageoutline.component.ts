import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pageoutline',
  standalone: true,
  imports:[NgIf],
  templateUrl: './pageoutline.component.html',
  styleUrls: ['./pageoutline.component.css']
})
export class PageOutlineComponent {
  @Input() outline!: { id: string, name: string, content: string, avatar: string };
  @Output() select = new EventEmitter<string>();

  selectOutline() {
    this.select.emit(this.outline.id);
  }
}
