package com.diabets.DiabetesTrackerAngular.repository;

import com.diabets.DiabetesTrackerAngular.model.GlucoseReading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GlucoseReadingRepository extends JpaRepository<GlucoseReading, Integer> {

}
