import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements OnInit {
  ngOnInit() {
    this.observeProjectCards();
  }

  observeProjectCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add delay to each card
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.3 });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));
  }
}
