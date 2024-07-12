import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweather () {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=53907dcd692419014f9b50999c5bbb42&units=metric')
  }
}
