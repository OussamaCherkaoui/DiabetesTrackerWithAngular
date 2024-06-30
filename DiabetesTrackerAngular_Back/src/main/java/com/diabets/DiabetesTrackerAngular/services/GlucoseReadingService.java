package com.diabets.DiabetesTrackerAngular.services;

import com.diabets.DiabetesTrackerAngular.model.GlucoseReading;
import com.diabets.DiabetesTrackerAngular.repository.GlucoseReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GlucoseReadingService {
    @Autowired
    GlucoseReadingRepository glucoseReadingRepository;


    public Optional<GlucoseReading> getGlucoseReadingById(Integer id) {
        return glucoseReadingRepository.findById(id);
    }

    public GlucoseReading saveGlucoseReading(GlucoseReading glucoseReading) {
        glucoseReadingRepository.save(glucoseReading);
        return glucoseReading;
    }

    public GlucoseReading updateGlucoseReading(GlucoseReading glucoseReading){
        glucoseReadingRepository.save(glucoseReading);
        return glucoseReading;
    }

    public List<GlucoseReading> getAllGlucoseReadings() {
        return glucoseReadingRepository.findAll();
    }

    public GlucoseReading deleteGlucoseReadingById(Integer id) {
        Optional<GlucoseReading> optionalGlucoseReading = glucoseReadingRepository.findById(id);
        if (optionalGlucoseReading.isPresent()) {
            glucoseReadingRepository.deleteById(id);
            return optionalGlucoseReading.get();
        } else {
            throw new RuntimeException("Glucose reading not found with id " + id);
        }
    }
}
