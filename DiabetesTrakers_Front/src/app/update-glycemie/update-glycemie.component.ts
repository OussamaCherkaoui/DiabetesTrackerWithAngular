import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GlucoseReading} from "../../models/glucose-reading";
import {GlycoseReadingServiceService} from "../../services/glycose-reading-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-update-glycemie',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './update-glycemie.component.html',
  styleUrl: './update-glycemie.component.css'
})
export class UpdateGlycemieComponent implements OnInit{

  public GlycoseReadingUpdated: GlucoseReading = new GlucoseReading();

  constructor(
    private route: ActivatedRoute,
    private glycoseReadingService: GlycoseReadingServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.glycoseReadingService.getById(id).subscribe(glycoseReading => {
        this.GlycoseReadingUpdated = glycoseReading;
      });
    }
  }

  updateGlycoseReading():void {
    this.glycoseReadingService.update(this.GlycoseReadingUpdated).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
