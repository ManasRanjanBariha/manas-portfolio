import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill implements OnInit {
  @ViewChild('skillSection', { static: false }) skillSection!: ElementRef;

  ngOnInit() {
    this.observeSkillBars();
  }

  observeSkillBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillFills = entry.target.querySelectorAll('.skill-fill');
          skillFills.forEach(fill => {
            fill.classList.add('go');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }
}
