import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit {
  ngOnInit() {
    this.observeExperienceRows();
  }

  observeExperienceRows() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add delay to each row
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.3 });

    const expRows = document.querySelectorAll('.exp-row');
    expRows.forEach(row => observer.observe(row));
  }
}
