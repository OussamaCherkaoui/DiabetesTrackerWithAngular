import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {GlucoseReading} from "../models/glucose-reading";
import {GlycemiesComponent} from "./glycemies/glycemies.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GlycemiesComponent, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  ngOnInit(): void {

  }
}
