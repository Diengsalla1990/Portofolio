import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Développez le front-end en utilisant Angular',
      summary: "Dans ce projet, on plonge dans le cœur du développement front-end en utilisant le framework Angular, un framework TypeScript qui crée des applications web dynamiques et interactives.Ce projet vous permet de développer une application web interactive pour une chaîne de télévision. Vous allez consolider vos compétences en programmation front-end grâce à Angular..",
      description: 
      "Dans ce projet, vous plongez dans le cœur du développement front-end en utilisant le framework Angular, un framework TypeScript qui crée des applications web dynamiques et interactives.Ce projet nous permet de développer une application web interactive pour une chaîne de télévision ce projet nous a permis de comprendre Rxjs et les Observables utilisation des service avec des appel HTTP.",
      projectLink: 'https://github.com/Diengsalla1990/Openclassrooms_Projet2',
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP,Tag.HTML5,Tag.CSS3, Tag.RXJS],
      pictures: ["../../assets/projet2-1.png", "../../assets/projet2-2.png"]
    },
    {
      id: 2,
      name: 'Développez le back-end en utilisant Java et Spring Boot',
      summary: "Ce projet nous a permi de développer nos compétences en back-end avec Java et Spring Boot, indispensables pour la création de services robustes et de solutions logicielles complètes ",
      description: "Dans ce projet, nous avons crée un portail pour la mise en relation entre locataires et propriétaires en mettant en place l’API REST, l’interaction avec la base de données et le système d’authentification.Ce projet nous a permi de métriser Spring boot en intégrant Spring Data pour la gestion des données ainsi une implémentation de sécurity avec Spring Sécurity, documentation Swagger",
      projectLink: 'https://github.com/Diengsalla1990/Openclassroom-projet3',
      tags: [Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.LOMBOK, Tag.SWAGGER, Tag.SPRINGDATA],
      pictures: ["../../assets/oil_01.png", "../../assets/oil_02.png", "../../assets/oil_03.png", "../../assets/oil_04.png", "../../assets/oil_05.png"]
    },
    {
      id: 3,
      name: 'Testez une application full-stack',
      summary: 'Après avoir acquis des compétences en développement front-end et back-end, ainsi en architecture logicielle, nous avons appris à rédiger des tests automatisés pour le front-end et le back-end avec les principes du Test-Driven Development (TDD). En plus, nous avons rédiger et implémenter des tests unitaires, d’intégration et end-to-end en utilisant des outils modernes comme Cypress, Jest, et JUnit.',
      description: 'Durant ce projet apprendre à maîtriser l’ensemble des tests qui peuvent vous être demandés sur un projet Angular-Java. Nous avons génerer des rapports de couvertures afin de suivre l’avancement de nos tests ; une fois qu’un test est terminé, que la couverture de code a augmenté, ainsi implémenter des test utile. Ces tests Automatisés permettent de détecter et corriger les bugs plus rapidement, de réduire les coûts de maintenance et améliorer la satisfaction des utilisateurs. ',
      projectLink: 'https://github.com/Diengsalla1990/Testez-une-application-full-stack_Project5',
      tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.CYPRESS, Tag.JEST, Tag.JUNIT, Tag.MOCKITO],
      pictures: ["../../assets/p5-1.png", "../../assets/p5-2.png","../../assets/p5-3.png","../../assets/p5-4.png"]
    },
    {
      id: 4,
      name: 'Développez une application full-stack complète',
      summary: 'Dans ce projet, nous avons conçu et développer MDD (Monde de Dév), un réseau social pour les développeurs. Nous avons combiné et appliqué nos compétences acquises en front-end, back-end et dans la gestion de larchitecture logicielle.',
      description: 'In this project, I aimed to build a comprehensive Pokédex API and a user-friendly frontend interface to enhance the Pokémon experience. My primary objective here was to showcase knowledge in a variety of tools and development services. These included the creation of an API with FastAPI (Python), handling robust data size and asynchronous requests; showcasing alphabetical order for the Pokémon list and data; designing a dark-theme interface for improved user experience; developing an intuitive frontend interface that allows for easy browsing and access to Pokémon information; exporting Pokémon data to an XML file; using Gitflow for version control and collaborative development; Pytest for unit testing to maintain code quality and reliability; and Docker and Docker-Compose for building and deploying the application efficiently. With these tools and objectives in place, the Pokédex Project was created and is ready for testing, use, and deployment.',
      projectLink: 'https://github.com/Diengsalla1990/Developpez-une-application-full-stack-complete',
      tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.MYSQL, Tag.SPRINGDATA, Tag.SPRINGBOOT,Tag.SPRINGSECURITY, Tag.JPA, Tag.LOMBOK, Tag.POSTMAN],
      pictures: ["../../assets/PB5-1.png", "../../assets/PB5-2.png", "../../assets/PF5-1.png", "../../assets/PF5-2.png", "../../assets/PF5-3.png", "../../assets/PF5-4.png", "../../assets/PF5-5.png","../../assets/PF5-6.png"]
    },
    
    {
      id: 5,
      name: 'Mon Portfolio en Angular',
      summary: 'Un site Web de portfolio réactif et dynamique conçu et développé par DIENG Ibra',
      description: 'Ce portfolio est une application web dynamique et responsive, développée avec Angular, qui met en valeur mes compétences et mes projets de développeur logiciel. Sa conception et son développement visaient à offrir une expérience utilisateur fluide sur différents appareils tout en mettant en valeur les différents aspects de mon parcours professionnel. Il comprend des sections : accueil, à propos, formation, projets et coordonnées. Ses principales caractéristiques sont son contenu dynamique, son design responsive et son esthétique moderne.',
      projectLink: 'https://github.com/Diengsalla1990/Portofolio.git',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/PO1.png", "../../assets/PO2.png", "../../assets/PO3.png"]
    },
    
    
    

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
