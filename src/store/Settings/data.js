export const cardEventSimple = [
   { title: "Total Event Count", eventNumber: 349.260, percentageChange: 30.3 },
   { title: "Events Per User", eventNumber: 247.9, percentageChange: 22.2 },
   { title: "Events Per Session", eventNumber: 32.5, percentageChange: -4.5 }
]
export const cardEventWithTotal = [
   { title: "Total Event Count", eventNumber: 349.260, percentageChange: 30.3, percentageCounting: 94.3 },
   { title: "Events Per User", eventNumber: 247.9, percentageChange: 22.2, percentageCounting: 5.1 },
   { title: "Events Per Session", eventNumber: 32.5, percentageChange: -4.5, percentageCounting: 0.3 }
]

export const dataTable = {
   headers: [
      { title: 'Event', key: 'event' },
      { title: 'Sum', key: 'sum', width: "13%" },
      { title: 'Duration', key: 'duration', width: "03%" },
      { title: 'Count', key: 'count', width: "10%" },
   ],
   items: [
      { event: 'Change period', sum: 0, duration: '-', count: 329272 },
      { event: 'PING', sum: 0, duration: '-', count: 17902 },
      { event: 'Cohort create', sum: 0, duration: '-', count: 1015 },
      { event: 'Formula execute', sum: 0, duration: '-', count: 585 },
      { event: 'Populatore execute', sum: 0, duration: '-', count: 182 },
      { event: 'Move to report manager', sum: 0, duration: '-', count: 146 },
      { event: 'Drill action', sum: 0, duration: '-', count: 68 },
      { event: 'Install', sum: 0, duration: '-', count: 49 },
      { event: 'Funnel create', sum: 0, duration: '-', count: 29 },
      { event: 'Attribution campaign create', sum: 0, duration: '-', count: 5 }
   ]
}

export const dataChartA = {
   header: {
      title: "Total Event Count",
      eventNumber: 349.260,
      percentageChange: 30.3,
   },
   series: [
      {
         name: "series-1",
         data: [ 30, 70, 91, 30, 40, 40, 35, 50, 49, 60, 35, 50, 49, 60, 70, 20, 35, 50, 49, 60, 70, 51, 30, 40, 30, 70, 91, 30, 40, 40, 35, 50, 49, 60, 35, 50, 49, 60, 70, 20, 35, 50, 49, 60, 70, 51, 30, 40 ]
      }
   ],

   // CHART OPTIONS
   options: {
      chart: {
         id: "vuechart",
         type: "bar",
         toolbar: {
            show: false,
         },
         parentHeightOffset: 0,
      },
      responsive: [{
         breakpoint: '500px',
         options: {
            chart: {
               height: '200px',
            },
         },
      }],
      dataLabels: {
         enabled: false
      },
      fill: {
         type: "gradient",
         gradient: {
            type: "vertical",
            colorStops: [
               {
                  offset: 0,
                  color: '#DD4151'
               },
               {
                  offset: 100,
                  color: '#1CBFDD'
               }
            ]
         },
         width: 3
      },
      plotOptions: {
         bar: {
            borderRadius: 2,
            columnWidth: '5px',
            endingShape: 'rounded'
         }
      },
      xaxis: {
         tickPlacement: 'on',
         labels: {
            show: false,
         },
         axisTicks: {
            show: false
         },
      },
      yaxis: {
         opposite: true,
         labels: {
            align: 'right',
            style: {
               colors: ['#BDBDBD'],
               fontSize: '12px',
               fontFamily: 'Helvetica, Arial, sans-serif',
               fontWeight: 400,
               cssClass: 'apexcharts-yaxis-label',
            }
         }
      },
      grid: {
         show: true,
         borderColor: '#EEEEEE',
         strokeDashArray: 0,
         padding: { left: 0, top: 0, bottom: 0 }
      }
   }
}

export const dataChartB = {
   header: {
      title: "Total Event Count",
      eventNumber: 349.260,
      percentageChange: 30.3,
   },
   series: [
      {
         name: "series-1",
         data: [ 30, 70, 91, 30, 40, 40, 35, 50, 49, 60, 35, 50, 49, 60, 70, 20, 35, 50, 49, 60, 70, 51, 30, 40, 30, 70, 91, 30, 40, 40, 35, 50, 49, 60, 35, 50, 49, 60, 70, 20, 35, 50, 49, 60, 70, 51, 30, 40 ]
      }
   ],

   // CHART OPTIONS
   options: {
      chart: {
         id: "vuechart",
         type: "bar",
         toolbar: {
            show: false,
         },
         parentHeightOffset: 0,
      },
      responsive: [{
         breakpoint: '500px',
         options: {
            chart: {
               height: '200px',
            },
         },
      }],
      dataLabels: {
         enabled: false
      },
      fill: {
         type: "gradient",
         gradient: {
            type: "vertical",
            colorStops: [
               {
                  offset: 0,
                  color: '#DD4151'
               },
               {
                  offset: 100,
                  color: '#1CBFDD'
               }
            ]
         },
         width: 3
      },
      plotOptions: {
         bar: {
            borderRadius: 2,
            columnWidth: '5px',
            endingShape: 'rounded'
         }
      },
      xaxis: {
         tickPlacement: 'on',
         labels: {
            show: false,
         },
         axisTicks: {
            show: false
         },
      },
      yaxis: {
         opposite: true,
         labels: {
            align: 'right',
            style: {
               colors: ['#BDBDBD'],
               fontSize: '12px',
               fontFamily: 'Helvetica, Arial, sans-serif',
               fontWeight: 400,
               cssClass: 'apexcharts-yaxis-label',
            }
         }
      },
      grid: {
         show: true,
         borderColor: '#EEEEEE',
         strokeDashArray: 0,
         padding: { left: 0, top: 0, bottom: 0 }
      }
   }
}