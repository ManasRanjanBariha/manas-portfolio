import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { Skill } from '../skill/skill';
import { Project } from '../project/project';
import { Experience } from '../experience/experience';
import { Footer } from '../footer/footer';
import { Contant } from '../contant/contant';
@Component({
  selector: 'app-home-page',
  imports: [Navbar, Hero, Skill, Project, Experience, Footer, Contant],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
