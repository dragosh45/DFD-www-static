import {Component} from '@angular/core'

//standalone component can be used in index.html file
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {} // class to be instatiated by angular
