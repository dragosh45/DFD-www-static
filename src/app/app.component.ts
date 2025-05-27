import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PageOutlineComponent} from "./pageoutline/pageoutline.component";
//import { DUMMY_OUTLINES } from './dummy-outlines';
//import { OutlineContentComponent } from "./outlinecontent/outlinecontent.component";
//OutlineContentComponent
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,  PageOutlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Data Flow Dynamics';

  // Manually define outlines (now including avatars)
  outlines = [
    { id: 'services', name: 'Services', content: 'Extract, transform, and load your data efficiently.', avatar: 'assets/core_services_logo_3.png' },
    { id: 'use-cases', name: 'Use Cases', content: 'Explore different ways to optimize your data pipeline.', avatar: 'assets/use_cases2.png' },
    { id: 'contact', name: 'Contact', content: 'Reach out to us for more details about our services.', avatar: 'assets/contactLogo.png' }
  ];

  selectedOutline: any | null = null;
  showWelcome = true;

  onSelectOutline(outline: any) {
    if (this.selectedOutline === outline) return; // Prevent unnecessary re-renders

    this.selectedOutline = outline;
    this.showWelcome = false; // Hide welcome text once an outline is selected
  }
}
