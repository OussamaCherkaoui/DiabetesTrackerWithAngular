package com.diabets.DiabetesTrackerAngular.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
@Builder
@Entity
@Table(name = "GlucoseReading")
public class GlucoseReading {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer glucoseReadingId;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:MM")
    private LocalDateTime dateAndTime;

    @Column(nullable = false)
    private Integer level;

    @Column(nullable = false, length = 50)
    private String measurementType;


    @Column(columnDefinition = "TEXT")
    private String comment;


    @Override
    public String toString() {
        return "GlucoseReading{" +
                "glucoseReadingId=" + glucoseReadingId +
                ", dateAndTime=" + dateAndTime +
                ", level=" + level +
                ", measurementType='" + measurementType + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}
