import {Component, OnInit} from '@angular/core';
import {GlucoseReading} from "../../models/glucose-reading";
import {GlycoseReadingServiceService} from "../../services/glycose-reading-service.service";
import {NgFor,NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-glycemies',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './glycemies.component.html',
  styleUrl: './glycemies.component.css'
})
export class GlycemiesComponent implements OnInit{
  glycosesReading: GlucoseReading[] = [];

  constructor(private glycoseReadingService: GlycoseReadingServiceService,private router: Router) {}

  ngOnInit(): void {
    this.loadGlycoses();
  }

  loadGlycoses(): void {
    this.glycoseReadingService.getAll().subscribe(data => {
      this.glycosesReading = data;
    });
  }

  deleteGlycose(id: number | undefined): void {
    this.glycoseReadingService.delete(id).subscribe(() => {
      this.loadGlycoses();
    });
  }

  updateGlycose(glucoseReadingId: number | undefined) {
    this.router.navigate(['/modifierGlycemie',glucoseReadingId]);
  }
}
