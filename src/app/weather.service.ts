import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f155260d94c860f85dd5c1245283323&units=metric`
    );
  }
}
