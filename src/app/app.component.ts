import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UIChart } from "primeng/primeng";


const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("mixedChart") mixedChart: UIChart;
  title = 'Dashboard for Nachiket Patki';
  
  acVoltsByTime = {

    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [
      {
        label: 'AC Volts/Time',
        backgroundColor: DEFAULT_COLORS[2],
        data: [0,65, 59, 80, 55, 67, 73],
        //fill: false
      }
    ]

  }

  acAmperesByTime = {

    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [
      {
        label: 'AC Current/Time',
        backgroundColor: DEFAULT_COLORS[4],
        data: [0,65, 59, 80, 55, 67, 73],
        //fill: false
      }
    ]

  }

  fuelByTime = {

    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [
      {
        label: 'Fuel/Time',
        backgroundColor: DEFAULT_COLORS[6],
        data: [0,65, 59, 80, 55, 67, 73],
        //fill: false
      }
    ]

  }


  optionsVolts = {
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Voltage'
        }
      }]
    }   
  }

  optionsAmperes = {
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Current'
        }
      }]
    }   
  }
  
  optionsFuel = {
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Liter'
        }
      }]
    }   
  }

  ngAfterViewInit() {

  }

}
