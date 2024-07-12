import { Component, OnInit } from '@angular/core';
import { WeatherServerService } from './services/weather-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  checkTemperature(temp:number) {
    return temp <= 20;
  }
  testTemp: number = 30;
  myWeather: any;
  temp: number = 0;
  temp_min: string[] = [];
  temp_max: string[] = [];
  humidity: string[] = [];
  wind: string[] = [];
  city: string = 'Hanoi';
  units: string = 'metric';
  datas: any[] = [];

  constructor(private weatherService: WeatherServerService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe({
      next: (res) => {
        this.myWeather = res;
        this.temp = this.myWeather.main.temp;
        this.temp_max = this.myWeather.main.temp_max;
        this.temp_min = this.myWeather.main.temp_min;
        this.humidity = this.myWeather.main.humidity;
        this.wind = this.myWeather.wind.speed;
        this.datas = [
          {
            className: 'info-block-highTemp',
            img: 'https://cdn-icons-png.freepik.com/512/7512/7512513.png',
            label: 'max',
            value: this.temp_max + "ºC",
          },
          {
            className: 'info-block-lowTemp',
            img: 'https://cdn-icons-png.freepik.com/512/7512/7512501.png',
            label: 'min',
            value: this.temp_min+ "ºC",
          },
          {
            className: 'info-block-humid',
            img: 'https://cdn-icons-png.flaticon.com/512/2828/2828802.png',
            label: 'humidity',
            value: this.humidity + "%",
          },
          {
            className: 'info-block-wind',
            img: 'https://cdn-icons-png.freepik.com/512/414/414975.png?ga=GA1.1.1805912274.1719994736',
            label: 'wind',
            value: this.wind + "km/h",
          },
        ];
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed'),
    });
  }
}
