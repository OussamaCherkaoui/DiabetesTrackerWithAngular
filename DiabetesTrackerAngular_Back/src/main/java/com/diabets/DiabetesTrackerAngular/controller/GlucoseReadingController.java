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
@RequestMapping("/glucoseReadings")
@CrossOrigin(origins = "http://localhost:4200/")
public class GlucoseReadingController {

    @Autowired
    private GlucoseReadingService glucoseReadingService;

    @GetMapping
    public List<GlucoseReading> getAllGlucoseReadings() {
        return glucoseReadingService.getAllGlucoseReadings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GlucoseReading> getGlucoseReadingsById(@PathVariable Integer id) {
        return ResponseEntity.of(glucoseReadingService.getGlucoseReadingById(id));
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

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGlucoseReading(@PathVariable Integer id) {
        try {
            GlucoseReading deletedGlucoseReading = glucoseReadingService.deleteGlucoseReadingById(id);
            return new ResponseEntity<>(deletedGlucoseReading, HttpStatus.OK);
        } catch (Exception e) {
            System.err.println("Error deleting glucose reading: " + e.getMessage());
            return new ResponseEntity<>("Error deleting glucose reading", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
