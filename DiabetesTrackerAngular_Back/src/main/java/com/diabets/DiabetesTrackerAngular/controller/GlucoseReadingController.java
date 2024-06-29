package com.diabets.DiabetesTrackerAngular.controller;

import com.diabets.DiabetesTrackerAngular.model.GlucoseReading;
import com.diabets.DiabetesTrackerAngular.services.GlucoseReadingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/glucoseReadings")
public class GlucoseReadingController {

    @Autowired
    private GlucoseReadingService glucoseReadingService;

    @GetMapping("/")
    public List<GlucoseReading> getAllGlucoseReadings() {
        return glucoseReadingService.getAllGlucoseReadings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GlucoseReading> getGlucoseReadingsById(@PathVariable Integer glucoseReadingId) {
        return ResponseEntity.of(glucoseReadingService.getGlucoseReadingById(glucoseReadingId));
    }

    @PostMapping("/save")
    public ResponseEntity<GlucoseReading> saveGlucoseReading(@RequestBody GlucoseReading glucoseReading) {
        GlucoseReading SaveGlucoseReading = glucoseReadingService.saveGlucoseReading(glucoseReading);
        return new ResponseEntity<>(SaveGlucoseReading, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<GlucoseReading> updateGlucoseReading(@RequestBody GlucoseReading glucoseReading) {
        GlucoseReading updateGlucoseReading = glucoseReadingService.updateGlucoseReading(glucoseReading);
        return new ResponseEntity<>(updateGlucoseReading, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<GlucoseReading> deleteGlucoseReading(@RequestParam(name ="glucoseReadingId") Integer glucoseReadingId) {
        GlucoseReading deletedGlucoseReading = glucoseReadingService.deleteGlucoseReadingById(glucoseReadingId);
        return new ResponseEntity<>(deletedGlucoseReading, HttpStatus.OK);
    }
}
