import { DOCUMENT, isPlatformServer } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-broken',
  standalone: true,
  imports: [],
  templateUrl: './broken.component.html',
  styleUrl: './broken.component.scss',
})
export class BrokenComponent implements OnInit {
  private doc = inject(DOCUMENT);
  private isServer = isPlatformServer(inject(PLATFORM_ID));

  ngOnInit(): void {
    if (this.isServer) {
      const div = this.doc.querySelector('div');
      div!.remove();
    }
  }
}
