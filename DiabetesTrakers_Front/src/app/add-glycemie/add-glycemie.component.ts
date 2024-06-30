import {Component, OnInit} from '@angular/core';
import {GlucoseReading} from "../../models/glucose-reading";
import {create} from "node:domain";
import {GlycoseReadingServiceService} from "../../services/glycose-reading-service.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgModel,NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-glycemie',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-glycemie.component.html',
  styleUrl: './add-glycemie.component.css'
})
export class AddGlycemieComponent implements OnInit{

  public newGlycoseReading: GlucoseReading = new GlucoseReading();

  constructor(
    private glycoseReadingService: GlycoseReadingServiceService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  createGlycoseReading(): void {
    this.glycoseReadingService.create(this.newGlycoseReading).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
