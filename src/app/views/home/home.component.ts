import { AfterViewInit, Component } from '@angular/core';
declare var $: any; // jQuery declaration
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('[data-toggle="owl"]').each(function (this: HTMLElement) {
        const $this = $(this);
        const options = $this.attr('data-owl-options') ? JSON.parse($this.attr('data-owl-options')!) : {};
        if (!$this.hasClass('owl-loaded')) {
          $this.owlCarousel(options);
        }
      });
    }, 500); // <- try increasing delay to 500ms
  }

}
