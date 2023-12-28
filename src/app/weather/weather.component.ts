import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any = {};
  summary: string = '';
  temp: string = '';
  minTemp: number = 0;
  maxTemp: number = 0;
  wind: number = 0;
  humidity: number = 0;
  icon: string = '';
  cityName: string = 'giza';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
    this.cityName = '';
  }

  onSubmit() {
    this.getWeather();
    this.cityName = '';
  }

  getWeather() {
    this.weatherService.getWeather(this.cityName).subscribe({
      next: (res) => {
        this.weatherData = res;

        this.cityName = this.weatherData.name;
        this.summary = this.weatherData.weather[0].description;
        this.temp = this.weatherData.main.temp;
        this.minTemp = this.weatherData.main.temp_min;
        this.maxTemp = this.weatherData.main.temp_max;
        this.wind = this.weatherData.wind.speed;
        this.humidity = this.weatherData.main.humidity;
        this.icon = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
      },
      error: () => alert('Invalid city name'),
      // complete: () => console.log('api call completed'),
    });
  }
}
