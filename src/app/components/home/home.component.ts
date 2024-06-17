import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

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

  private router = inject(Router);

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

  navigateToCards(): void {
    this.router.navigate(['cards']);
  }
}
