import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
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
