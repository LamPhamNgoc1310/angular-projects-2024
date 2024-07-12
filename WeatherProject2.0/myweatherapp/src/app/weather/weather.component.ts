import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'Hanoi';
  units: string = 'metric';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getweather().subscribe({
      next: (res) => {
        this.myWeather = res;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        console.log(this.myWeather);
        
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }
}
