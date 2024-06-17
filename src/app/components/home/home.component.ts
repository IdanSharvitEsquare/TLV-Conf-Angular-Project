import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  title = 'angular-tlv-conf';
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  ngAfterViewInit(): void {
    this.hamburger.nativeElement.addEventListener('click', () => {
      const menu = this.menu.nativeElement;
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      } else {
        menu.classList.add('show');
      }
    });
  }
}
