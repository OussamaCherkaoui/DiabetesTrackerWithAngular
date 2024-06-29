import {Component, OnInit} from '@angular/core';
import {GlucoseReading} from "../../models/glucose-reading";
import {GlycoseReadingServiceService} from "../../services/glycose-reading-service.service";
import {NgFor,NgIf} from "@angular/common";

@Component({
  selector: 'app-glycemies',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './glycemies.component.html',
  styleUrl: './glycemies.component.css'
})
export class GlycemiesComponent implements OnInit{
  glycosesReading: GlucoseReading[] = [];

  constructor(private glycoseReadingService: GlycoseReadingServiceService) {}

  ngOnInit(): void {
    this.loadGlycoses();
  }

  loadGlycoses(): void {
    this.glycoseReadingService.getAll().subscribe(data => {
      console.log(data._embedded.glucoseReadings)
      this.glycosesReading = data._embedded.glucoseReadings;
    });
  }

  deleteGlycose(id: number | undefined): void {
    if (id === undefined) {
      console.error('ID is undefined');
      return;
    }

    this.glycoseReadingService.delete(id).subscribe(() => {
      this.loadGlycoses();
    });
  }
}
