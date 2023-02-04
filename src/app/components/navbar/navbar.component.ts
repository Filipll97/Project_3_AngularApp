import { Component } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  // TODO: Change this function
  public logoutTrainer(): void {
    this.trainerService.trainer = undefined;
  }
  constructor(
    private readonly trainerService: TrainerService
  ) { }
}
