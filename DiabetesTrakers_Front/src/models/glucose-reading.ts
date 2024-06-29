export class GlucoseReading {
  glucoseReadingId?: number;
  dateAndTime: string | undefined; // Using string to simplify date handling in forms
  level: number | undefined;
  measurementType: string | undefined;
  comment?: string;

  constructor(data?: Partial<GlucoseReading>) {
    if (data) {
      this.glucoseReadingId = data.glucoseReadingId;
      this.dateAndTime = data.dateAndTime;
      this.level = data.level;
      this.measurementType = data.measurementType;
      this.comment = data.comment;
    }
  }
}
