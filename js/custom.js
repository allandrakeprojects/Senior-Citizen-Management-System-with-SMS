
(function ($) {
  // USE STRICT
  "use strict";

  try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart1");
    if (ctx) {
      ctx.height = 130;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          type: 'line',
          datasets: [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'Dataset',
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 0
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }


    //WidgetChart 2
    var ctx = document.getElementById("widgetChart2");
    if (ctx) {
      ctx.height = 130;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          type: 'line',
          datasets: [{
            data: [1, 18, 9, 17, 34, 22],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {

          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              tension: 0.00001,
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }


    //WidgetChart 3
    var ctx = document.getElementById("widgetChart3");
    if (ctx) {
      ctx.height = 130;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          type: 'line',
          datasets: [{
            data: [65, 59, 84, 84, 51, 55],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {

          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }


    //WidgetChart 4
    var ctx = document.getElementById("widgetChart4");
    if (ctx) {
      ctx.height = 115;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: "My First dataset",
              data: [78, 81, 80, 65, 58, 75, 60, 75, 65, 60, 60, 75],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "rgba(255,255,255,.3)"
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.65
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

    // Recent Report
    const brandProduct = 'rgba(0,181,233,0.8)'
    const brandService = 'rgba(0,173,95,0.8)'

    var elements = 10
    var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
    var data2 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

    var ctx = document.getElementById("recent-rep-chart");
    if (ctx) {
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: brandService,
              borderColor: 'transparent',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data1

            },
            {
              label: 'My Second dataset',
              backgroundColor: brandProduct,
              borderColor: 'transparent',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data2

            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: true,
                color: '#f2f2f2'

              }
            }]
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            }
          }


        }
      });
    }

    // Percent Chart
    var ctx = document.getElementById("percent-chart");
    if (ctx) {
      ctx.height = 280;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: "My First dataset",
              data: [60, 40],
              backgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              hoverBackgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              borderWidth: [
                0, 0
              ],
              hoverBorderColor: [
                'transparent',
                'transparent'
              ]
            }
          ],
          labels: [
            'Products',
            'Services'
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 55,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 15,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }



  try {

    // Recent Report 2
    const bd_brandProduct2 = 'rgba(0,181,233,0.9)'
    const bd_brandService2 = 'rgba(0,173,95,0.9)'
    const brandProduct2 = 'rgba(0,181,233,0.2)'
    const brandService2 = 'rgba(0,173,95,0.2)'

    var data3 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
    var data4 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

    var ctx = document.getElementById("recent-rep2-chart");
    if (ctx) {
      ctx.height = 230;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: brandService2,
              borderColor: bd_brandService2,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data3

            },
            {
              label: 'My Second dataset',
              backgroundColor: brandProduct2,
              borderColor: bd_brandProduct2,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data4

            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: true,
                color: '#f2f2f2'

              }
            }]
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            },
            line: {
              tension: 0
            }
          }


        }
      });
    }

  } catch (error) {
    console.log(error);
  }


  try {

    // Recent Report 3
    const bd_brandProduct3 = 'rgba(0,181,233,0.9)';
    const bd_brandService3 = 'rgba(0,173,95,0.9)';
    const brandProduct3 = 'transparent';
    const brandService3 = 'transparent';

    var data5 = [52, 60, 55, 50, 65, 80, 57, 115];
    var data6 = [102, 70, 80, 100, 56, 53, 80, 90];

    var ctx = document.getElementById("recent-rep3-chart");
    if (ctx) {
      ctx.height = 230;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', ''],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: brandService3,
              borderColor: bd_brandService3,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data5,
              pointBackgroundColor: bd_brandService3
            },
            {
              label: 'My Second dataset',
              backgroundColor: brandProduct3,
              borderColor: bd_brandProduct3,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data6,
              pointBackgroundColor: bd_brandProduct3

            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: false,
                color: '#f2f2f2'
              }
            }]
          },
          elements: {
            point: {
              radius: 3,
              hoverRadius: 4,
              hoverBorderWidth: 3,
              backgroundColor: '#333'
            }
          }


        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {
    //WidgetChart 5
    var ctx = document.getElementById("widgetChart5");
    if (ctx) {
      ctx.height = 220;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: "My First dataset",
              data: [78, 81, 80, 64, 65, 80, 70, 75, 67, 85, 66, 68],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.65
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {

    // Percent Chart 2
    var ctx = document.getElementById("percent-chart2");
    if (ctx) {
      ctx.height = 209;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: "My First dataset",
              data: [60, 40],
              backgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              hoverBackgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              borderWidth: [
                0, 0
              ],
              hoverBorderColor: [
                'transparent',
                'transparent'
              ]
            }
          ],
          labels: [
            'Products',
            'Services'
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 87,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              fontSize: 14,
              fontFamily: "Poppins,sans-serif"
            }

          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 15,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16,
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {
    //Sales chart
    var ctx = document.getElementById("sales-chart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            label: "Foods",
            data: [0, 30, 10, 120, 50, 63, 10],
            backgroundColor: 'transparent',
            borderColor: 'rgba(220,53,69,0.75)',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(220,53,69,0.75)',
          }, {
            label: "Electronics",
            data: [0, 50, 40, 80, 40, 79, 120],
            backgroundColor: 'transparent',
            borderColor: 'rgba(40,167,69,0.75)',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(40,167,69,0.75)',
          }]
        },
        options: {
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Poppins',
            bodyFontFamily: 'Poppins',
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: 'Poppins',
            },
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: false,
                labelString: 'Month'
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Value',
                fontFamily: "Poppins"

              },
              ticks: {
                fontFamily: "Poppins"
              }
            }]
          },
          title: {
            display: false,
            text: 'Normal Legend'
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {

    //Team chart
    var ctx = document.getElementById("team-chart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            data: [0, 7, 3, 5, 2, 10, 7],
            label: "Expense",
            backgroundColor: 'rgba(0,103,255,.15)',
            borderColor: 'rgba(0,103,255,0.5)',
            borderWidth: 3.5,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(0,103,255,0.5)',
          },]
        },
        options: {
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Poppins',
            bodyFontFamily: 'Poppins',
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            position: 'top',
            labels: {
              usePointStyle: true,
              fontFamily: 'Poppins',
            },


          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: false,
                labelString: 'Month'
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Value',
                fontFamily: "Poppins"
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }]
          },
          title: {
            display: false,
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {
    //bar chart
    var ctx = document.getElementById("barChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'bar',
        defaultFontFamily: 'Poppins',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              fontFamily: "Poppins"
            },
            {
              label: "My Second dataset",
              data: [28, 48, 40, 19, 86, 27, 90],
              borderColor: "rgba(0,0,0,0.09)",
              borderWidth: "0",
              backgroundColor: "rgba(0,0,0,0.07)",
              fontFamily: "Poppins"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {

    //radar chart
    var ctx = document.getElementById("radarChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
          defaultFontFamily: 'Poppins',
          datasets: [
            {
              label: "My First dataset",
              data: [65, 59, 66, 45, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.6)",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.4)"
            },
            {
              label: "My Second dataset",
              data: [28, 12, 40, 19, 63, 27, 87],
              borderColor: "rgba(0, 123, 255, 0.7",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.5)"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scale: {
            ticks: {
              beginAtZero: true,
              fontFamily: "Poppins"
            }
          }
        }
      });
    }

  } catch (error) {
    console.log(error)
  }

  try {

    //line chart
    var ctx = document.getElementById("lineChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          defaultFontFamily: "Poppins",
          datasets: [
            {
              label: "My First dataset",
              borderColor: "rgba(0,0,0,.09)",
              borderWidth: "1",
              backgroundColor: "rgba(0,0,0,.07)",
              data: [22, 44, 67, 43, 76, 45, 12]
            },
            {
              label: "My Second dataset",
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              pointHighlightStroke: "rgba(26,179,148,1)",
              data: [16, 32, 18, 26, 42, 33, 44]
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true,
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }

        }
      });
    }


  } catch (error) {
    console.log(error);
  }


  try {

    //doughut chart
    var ctx = document.getElementById("doughutChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ],
            hoverBackgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ]

          }],
          labels: [
            "Green",
            "Green",
            "Green",
            "Green"
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }


  } catch (error) {
    console.log(error);
  }


  try {

    //pie chart
    var ctx = document.getElementById("pieChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ],
            hoverBackgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ]

          }],
          labels: [
            "Green",
            "Green",
            "Green"
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {

    // polar chart
    var ctx = document.getElementById("polarChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          datasets: [{
            data: [15, 18, 9, 6, 19],
            backgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.8)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0,0,0,0.2)",
              "rgba(0, 123, 255,0.5)"
            ]

          }],
          labels: [
            "Green",
            "Green",
            "Green",
            "Green"
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {

    // single bar chart
    var ctx = document.getElementById("singelBarChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
          datasets: [
            {
              label: "My First dataset",
              data: [40, 55, 75, 81, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);



(function ($) {
    // USE STRICT
    "use strict";
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 900,
      outDuration: 900,
      linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'page-loader',
      loadingInner: '<div class="page-loader__spin"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'html',
      transition: function (url) {
        window.location.href = url;
      }
    });
  
  
  })(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Map
  try {

    var vmap = $('#vmap');
    if(vmap[0]) {
      vmap.vectorMap( {
        map: 'world_en',
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#1de9b6',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: [ '#1de9b6', '#03a9f5'],
        normalizeFunction: 'polynomial'
      });
    }

  } catch (error) {
    console.log(error);
  }

  // Europe Map
  try {
    
    var vmap1 = $('#vmap1');
    if(vmap1[0]) {
      vmap1.vectorMap( {
        map: 'europe_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        enableZoom: true,
        showTooltip: true
      });
    }

  } catch (error) {
    console.log(error);
  }

  // USA Map
  try {
    
    var vmap2 = $('#vmap2');

    if(vmap2[0]) {
      vmap2.vectorMap( {
        map: 'usa_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        enableZoom: true,
        showTooltip: true,
        selectedColor: null,
        hoverColor: null,
        colors: {
            mo: '#001BFF',
            fl: '#001BFF',
            or: '#001BFF'
        },
        onRegionClick: function ( event, code, region ) {
            event.preventDefault();
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  // Germany Map
  try {
    
    var vmap3 = $('#vmap3');
    if(vmap3[0]) {
      vmap3.vectorMap( {
        map: 'germany_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        onRegionClick: function ( element, code, region ) {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert( message );
        }
      });
    }
    
  } catch (error) {
    console.log(error);
  }
  
  // France Map
  try {
    
    var vmap4 = $('#vmap4');
    if(vmap4[0]) {
      vmap4.vectorMap( {
        map: 'france_fr',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        enableZoom: true,
        showTooltip: true
      });
    }

  } catch (error) {
    console.log(error);
  }

  // Russia Map
  try {
    var vmap5 = $('#vmap5');
    if(vmap5[0]) {
      vmap5.vectorMap( {
        map: 'russia_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        hoverOpacity: 0.7,
        selectedColor: '#999999',
        enableZoom: true,
        showTooltip: true,
        scaleColors: [ '#C8EEFF', '#006491' ],
        normalizeFunction: 'polynomial'
      });
    }


  } catch (error) {
    console.log(error);
  }
  
  // Brazil Map
  try {
    
    var vmap6 = $('#vmap6');
    if(vmap6[0]) {
      vmap6.vectorMap( {
        map: 'brazil_br',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        onRegionClick: function ( element, code, region ) {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
            alert( message );
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // Use Strict
  "use strict";
  try {
    var progressbarSimple = $('.js-progressbar-simple');
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on('load', function () {

        that.waypoint(function () {
          if (!executed) {
            executed = true;
            /*progress bar*/
            that.progressbar({
              update: function (current_percentage, $this) {
                $this.find('.js-value').html(current_percentage + '%');
              }
            });
          }
        }, {
            offset: 'bottom-in-view'
          });

      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Scroll Bar
  try {
    var jscr1 = $('.js-scrollbar1');
    if(jscr1[0]) {
      const ps1 = new PerfectScrollbar('.js-scrollbar1');      
    }

    var jscr2 = $('.js-scrollbar2');
    if (jscr2[0]) {
      const ps2 = new PerfectScrollbar('.js-scrollbar2');

    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Select 2
  try {

    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
      });
    });

  } catch (error) {
    console.log(error);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown 
  try {
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");        
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        }
        else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
    // Right Sidebar
    var right_sidebar = $('.js-right-sidebar');
    var sidebar_btn = $('.js-sidebar-btn');

    sidebar_btn.on('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
      right_sidebar.toggleClass("show-sidebar");
    });

    $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      right_sidebar.removeClass("show-sidebar");

    });
 

  // Sublist Sidebar
  try {
    var arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      that.on('click', function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      });
    });

  } catch (error) {
    console.log(error);
  }


  try {
    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $('.js-list-load');
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find('.js-load-item').hide();
        var load_btn = that.find('.js-load-btn');
        load_btn.on('click', function (e) {
          $(this).text("Loading...").delay(1500).queue(function (next) {
            $(this).hide();
            that.find(".js-load-item").fadeToggle("slow", 'swing');
          });
          e.preventDefault();
        });
      })

    }
  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {
    
    $('[data-toggle="tooltip"]').tooltip();

  } catch (error) {
    console.log(error);
  }

  // Chatbox
  try {
    var inbox_wrap = $('.js-inbox');
    var message = $('.au-message__item');
    message.each(function(){
      var that = $(this);

      that.on('click', function(){
        $(this).parent().parent().parent().toggleClass('show-chat-box');
      });
    });
    

  } catch (error) {
    console.log(error);
  }

  fillSeniorListDropdown();

  // Admin
  createAdmin();
  readAdmin();
  loginAdmin();

  // Senior
  createSenior();
  readSenior();

  buttonListener();
  setNavigation();

})(jQuery);


function fillSeniorListDropdown() {
  $('#senior_list_dropdown').empty()
  $.ajax({
    type: "GET",
    url: 'api/senior/read.php',
    success: function(data) {
      var s;
      var strArray = []
      var strArrayBirthday = [];
      var contact_number = '';
      for (var i = 0; i < data.length; i++) {
        var value;
        var value_birthday;
        if(data[i].status == '<label class="badge badge-success">Active</label>'){
          value = '<option value="' + data[i].id + '">' + data[i].full_name + '</option>';
          if(data[i].contact_number.trim() != ''){
            contact_number += data[i].contact_number + ',';
          }
          value_birthday = '<option value="' + data[i].contact_number + '">' + data[i].full_name + '</option>';
        } else {
          value = '<option value="' + data[i].id + '" disabled>' + data[i].full_name + '</option>';
          value_birthday = '<option value="' + data[i].contact_number + '" disabled>' + data[i].full_name + '</option>';
        }

        if (strArray.includes(value) === false) strArray.push(value);
        if (strArrayBirthday.includes(value_birthday) === false) strArrayBirthday.push(value_birthday);
      }
      $("#senior_list_dropdown").html(strArray);
      $("#senior_list_dropdown_birthday").html(strArrayBirthday);
      $('#senior_list_dropdown').fSelect();
      $('#senior_list_dropdown_birthday').fSelect();
      $("#get_all_senior_list").html(contact_number);
    }
  });  
}

function sendToAll() {
  var message = $('#message_sendtoall').val();
  if(message != ''){
    var get_all_senior_list = $('#get_all_senior_list').text();
    var get_all_senior_list_arr = get_all_senior_list.split(',');
    // for(var i = 0; i < get_all_senior_list_arr.length; i++) {
    for(var i = 0; i < 2; i++) {
      var number = get_all_senior_list_arr[i].trim();
      if(number != '' ){
        $.ajax({
          url: 'api/sms/send.php',
          type: 'POST',
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({ message: message, number: number }),
          success: function (data) { $('#message_sendtoall').val('') },
          error: function (jqXHR, textStatus, errorThrown) { $('#message_sendtoall').val('') }
        });
      }
    }

    setTimeout(function () {
      alert('Announcement Sent.');
    }, 3000);
  } else {
    alert('Please provide a message.');
  }
}

function sendBirthdayGreet() {
  var selected_seniors = $('#select_seniors_birthday').val();
  if(selected_seniors == 'None Selected'){
    alert('Please select a senior to greet.');
  } else {
    var selected_seniors_array = selected_seniors.split(',');
    for(var i = 0; i < selected_seniors_array.length; i++) {
      var split = selected_seniors_array[i] = selected_seniors_array[i].replace(/^\s*/, "").replace(/\s*$/, "").split('||');
      var number = split[0].trim();
      var name = split[1].trim();
      var message = $('#message_greet').val();
      
      $.ajax({
        url: 'api/sms/send.php',
        type: 'POST',
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({ message: message, number: number }),
        success: function (data) { $('#message_greet').val('') },
        error: function (jqXHR, textStatus, errorThrown) { $('#message_greet').val('') }
      });
    }

    setTimeout(function () {
      $('#senior_list_dropdown_birthday option:selected').removeAttr('selected');
  
      $('#senior_list_dropdown_birthday').prev(".fs-dropdown").find(".fs-options .fs-option").each(function() {
        $(this).removeClass('selected', false);
      });

      $('#select_seniors_birthday').val('None Selected')

      alert('Birthday Greet Sent.');
    }, 3000);
  }
}

// Admin ---------
function createAdmin() {
  $('#btn-add-admin').click(function(e) {
      var full_name = $('#full_name').val();
      var contact_number = $('#contact_number').val();
      var address = $('#address').val();
      var gender = $('#gender').val();
      var dob = $('#dob').val();
      var age = $('#age').val();
      var civil_status = $('#civil_status').val();
      var brgy = $('#brgy').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var status = $('#status').val();
          
      $.ajax({
          url: 'api/admin/create.php',
          type: 'POST',
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({ full_name: full_name, contact_number: contact_number, address: address, gender: gender, dob: dob, age: age, civil_status: civil_status, brgy: brgy, email: email, password: password, status: status }),
          success: function (data) { 
            $('#exampleModalAddAdmin').modal('toggle');
            $('#exampleModalAddAdmin').find('form').trigger('reset');
            $('#dataTableAdmin').DataTable().ajax.reload(); 
          },
          error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
      });
  })
}

var admin_id_glob;
function readAdmin() {
  var dataTableAdmin = $('#dataTableAdmin').DataTable({
    "columnDefs": [
      {
        "targets": 12,
        "sortable": false
      },
      {
        "targets": [0],
        "visible": false,
        "searchable": false
      }
    ],
    "ajax": {
      url: 'api/admin/read.php',
      dataSrc: ""
    },
    columns: [
      { "data": "id" },
      { "data": "full_name" },
      { "data": "contact_number" },
      { "data": "address" },
      { "data": "gender" },
      { "data": "dob" },
      { "data": "age" },
      { "data": "civil_status" },
      { "data": "brgy" },
      { "data": "email" },
      { "data": "password" },
      { "data": "status" },
      {
        data: null,
        defaultContent: "<button type='button' class='btn btn-primary btn-rounded btn-sm dt-edit btn-update-admin mb-1' style='margin-right:5px;'><i class='fas fa-pencil-alt'></i></button><button type='button' class='btn btn-danger btn-rounded btn-sm btn-delete-admin mb-1'><i class='fas fa-trash-alt'></i></button>"
      }
    ]
  });

  dataTableAdmin.columns.adjust().draw();

  $("#dataTableAdmin").on("click", ".btn-update-admin", function(e) {
    admin_id_glob = dataTableAdmin.row($(this).parents('tr')).data()["id"];
    $.ajax({
      url: 'api/admin/read_single.php',
      type: 'POST',
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: admin_id_glob }),
      success: function (data) {
        $('#full_name_update').val(data[0].full_name);
        $('#contact_number_update').val(data[0].contact_number);
        $('#address_update').val(data[0].address);
        $('#gender_update').val(data[0].gender).change();
        $('#dob_update').val(data[0].dob);
        $('#age_update').val(data[0].age);
        $('#civil_status_update').val(data[0].civil_status).change();
        $('#brgy_update').val(data[0].brgy).change();
        $('#email_update').val(data[0].email).change();
        $('#password_update').val('****').change();
        $('#status_update').val(data[0].status).change();
        $('#exampleModalUpdateAdmin').modal('show');
      },
      error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
    });
  });

  $("#dataTableAdmin").on("click", ".btn-delete-admin", function(e) {
    admin_id_glob = dataTableAdmin.row($(this).parents('tr')).data()["id"];
    var full_name = dataTableAdmin.row($(this).parents('tr')).data()["full_name"];
    $('#exampleModalDeleteAdmin').find('.modal-body-delete').append('Are you sure you want to delete admin <strong>' + full_name + '</strong>?');
    $('#exampleModalDeleteAdmin').modal('show');
  });

  $('#exampleModalDeleteAdmin').on('hidden.bs.modal', function () {
    $('#exampleModalDeleteAdmin').find('.modal-body-delete').text('');
  })
}

function loginAdmin() {
  $('#btn-signin').click(function(e) {
      var email = $('#exampleInputEmailLogin').val();
      var password = $('#exampleInputPasswordLogin').val();

      if(email.trim().length < 1 || password.trim().length < 1){
          alert('Please enter a valid format.');
      } else{
          $.ajax({
              url: 'api/admin/login.php',
              type: 'POST',
              contentType: "application/json",
              dataType: "json",
              data: JSON.stringify({ email: email, password: password }),
              error: function (request, status, error) {
                  alert("Password won't match to email.");
              }
          }).done(function(data){
              var status = JSON.stringify(data.status)
              var type = JSON.stringify(data.type)
              
              if(status == '"success"'){
                  location.href = "http://localhost/Senior%20Citizen%20Management%20System/announcement"
              } else if(status == '"inactive"') {
                  alert("Your account is inactive. Contact system administrator for more information.");
              } else {
                  alert("Password won't match to email.");
              }
          });
      }
  })
}

function buttonListener() {
  // Senior Modal
  $('#btn-update-senior-modal').click(function(e) {
    var full_name = $('#full_name_update').val();
    var contact_number = $('#contact_number_update').val();
    var address = $('#address_update').val();
    var gender = $('#gender_update').val();
    var dob = $('#dob_update').val();
    var age = $('#age_update').val();
    var occupation = $('#occupation_update').val();
    var civil_status = $('#civil_status_update').val();
    var brgy = $('#brgy_update').val();
    var status = $('#status_update').val();
        
    $.ajax({
        url: 'api/senior/update.php',
        type: 'POST',
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({ id: senior_id_glob, full_name: full_name, contact_number: contact_number, address: address, gender: gender, dob: dob, age: age, occupation: occupation, civil_status: civil_status, brgy: brgy, status: status }),
        success: function (data) {
          $('#exampleModalUpdateSenior').modal('toggle');
          $('#exampleModalUpdateSenior').find('form').trigger('reset');
          $('#dataTableSenior').DataTable().ajax.reload(); 
        },
        error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
    });
  })

  $('#btn-delete-senior-modal').click(function(e) {
    $.ajax({
      url: 'api/senior/delete.php',
      type: 'POST',
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: senior_id_glob }),
      success: function (data) {
        $('#exampleModalDeleteSenior').modal('hide');
        $('#dataTableSenior').DataTable().ajax.reload(); 
      },
      error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
    });
  })

  //Admin Modal
  $('#btn-update-admin-modal').click(function(e) {
    var full_name = $('#full_name_update').val();
    var contact_number = $('#contact_number_update').val();
    var address = $('#address_update').val();
    var gender = $('#gender_update').val();
    var dob = $('#dob_update').val();
    var age = $('#age_update').val();
    var civil_status = $('#civil_status_update').val();
    var brgy = $('#brgy_update').val();
    var email = $('#email_update').val();
    var password = $('#password_update').val();
    var status = $('#status_update').val();
        
    $.ajax({
        url: 'api/admin/update.php',
        type: 'POST',
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({ id: admin_id_glob, full_name: full_name, contact_number: contact_number, address: address, gender: gender, dob: dob, age: age, civil_status: civil_status, brgy: brgy, email: email, password: password, status: status }),
        success: function (data) {
          $('#exampleModalUpdateAdmin').modal('toggle');
          $('#exampleModalUpdateAdmin').find('form').trigger('reset');
          $('#dataTableAdmin').DataTable().ajax.reload(); 
        },
        error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
    });
  })

  $('#btn-delete-admin-modal').click(function(e) {
    $.ajax({
      url: 'api/admin/delete.php',
      type: 'POST',
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: admin_id_glob }),
      success: function (data) {
        $('#exampleModalDeleteAdmin').modal('hide');
        $('#dataTableAdmin').DataTable().ajax.reload(); 
      },
      error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
    });
  })

  $('#add_senior_scroll').click(function(e) {
    $('#uploadForm')[0].reset();
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
}
// End Admin ---------










// Senior ---------
function createSenior() {
  $('#btn-add-senior').click(function(e) {
    var full_name = $('#full_name').val();
        var contact_number = $('#contact_number').val();
        var address = $('#address').val();
        var gender = $('#gender').val();
        var dob = $('#dob').val();
        var age = $('#age').val();
        var occupation = $('#occupation').val();
        var civil_status = $('#civil_status').val();
        var brgy = $('#brgy').val();
        var status = $('#status').val();
            
        $.ajax({
            url: 'api/senior/create.php',
            type: 'POST',
            contentType: "multipart/form-data",
            dataType: "json",
            data: JSON.stringify({ full_name: full_name, contact_number: contact_number, address: address, gender: gender, dob: dob, age: age, occupation: occupation, civil_status: civil_status, brgy: brgy, status: status }),
            success: function (data) { 
              $('#exampleModalAddSenior').modal('toggle');
              $('#exampleModalAddSenior').find('form').trigger('reset');
              $('#dataTableSenior').DataTable().ajax.reload(); 
            },
            error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
        });
  })
}

var senior_id_glob;
function readSenior() {
  var dataTableSenior = $('#dataTableSenior').DataTable({
    "columnDefs": [
      {
        "targets": [12, 1],
        "sortable": false
      },
      {
        "targets": [0],
        "visible": false,
        "searchable": false
      }
    ],
    "ajax": {
      url: 'api/senior/read.php',
      dataSrc: ""
    },
    columns: [
      { "data": "id" },
      { "data": "image" },
      { "data": "full_name" },
      { "data": "contact_number" },
      { "data": "address" },
      { "data": "gender" },
      { "data": "dob" },
      { "data": "age" },
      { "data": "occupation" },
      { "data": "civil_status" },
      { "data": "brgy" },
      { "data": "status" },
      {
        data: null,
        defaultContent: "<a href='#scroll_form' class='btn btn-primary btn-rounded btn-sm dt-edit btn-update-senior mb-1' style='margin-right:5px;'><i class='fas fa-pencil-alt' style='color: white;'></i></a><button type='button' class='btn btn-danger btn-rounded btn-sm btn-delete-senior mb-1' style='margin-right:5px;'><i class='fas fa-trash-alt'></i></button><button type='button' class='btn btn-dark btn-rounded btn-sm btn-print-senior mb-1'><i class='fas fa-print'></i></button>"
      }
    ]
  });

  $("#dataTableSenior").on("click", ".btn-update-senior", function(e) {
    $('#btn_add_seniors').attr('name', 'update');
    $('#uploadForm')[0].reset();
    senior_id_glob = dataTableSenior.row($(this).parents('tr')).data()["id"];

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500, function() {
      setTimeout(
        function() 
        {
          $.ajax({
            url: 'api/senior/read_single.php',
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({ id: senior_id_glob }),
            success: function (data) {
              $('#id').val(data[0].id);
              $('#full_name').val(data[0].full_name);
              $('#contact_number').val(data[0].contact_number);
              $('#address').val(data[0].address);
              $('#gender').val(data[0].gender).change();
              $('#dob').val(data[0].dob);
              $('#age').val(data[0].age);
              $('#occupation').val(data[0].occupation);
              $('#civil_status').val(data[0].civil_status).change();
              $('#brgy').val(data[0].brgy);
              $('#blood_type').val(data[0].blood_type).change();
              $('#emer_name').val(data[0].emer_name);
              $('#emer_relationship').val(data[0].emer_relationship);
              $('#emer_address').val(data[0].emer_address);
              $('#emer_contact_number').val(data[0].emer_contact_number);
              $('#status').val(data[0].status).change();
              $('#exampleModalUpdateSenior').modal('show');
            },
            error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
          });
        }, 300);
    });
    return false;
  });

  $("#dataTableSenior").on("click", ".btn-print-senior", function(e) {
    $('#btn_add_seniors').attr('name', 'update');
    $('#uploadForm')[0].reset();
    senior_id_glob = dataTableSenior.row($(this).parents('tr')).data()["id"];
    $.ajax({
      url: 'api/senior/read_single.php',
      type: 'POST',
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: senior_id_glob }),
      success: function (data) {
        $('#id').val(data[0].id);
        $('#image_path').val(data[0].image);
        $('#full_name').val(data[0].full_name);
        $('#contact_number').val(data[0].contact_number);
        $('#address').val(data[0].address);
        $('#gender').val(data[0].gender).change();
        $('#dob').val(data[0].dob);
        $('#age').val(data[0].age);
        $('#occupation').val(data[0].occupation);
        $('#civil_status').val(data[0].civil_status).change();
        $('#brgy').val(data[0].brgy);
        $('#blood_type').val(data[0].blood_type).change();
        $('#emer_name').val(data[0].emer_name);
        $('#emer_relationship').val(data[0].emer_relationship);
        $('#emer_address').val(data[0].emer_address);
        $('#emer_contact_number').val(data[0].emer_contact_number);
        $('#status').val(data[0].status).change();
        $('#exampleModalUpdateSenior').modal('show');


        $.post('export.php', { full_name: $('#full_name').val(), contact_number: $('#contact_number').val(), image: $('#image_path').val(), brgy: $('#brgy').val(), dob: $('#dob').val(), blood_type: $('#blood_type').val(), emer_name: $('#emer_name').val(), emer_relationship: $('#emer_relationship').val(), emer_address: $('#emer_address').val(), emer_contact_number: $('#emer_contact_number').val() }, function(returnedData) {
          // do something here with the returnedData
          console.log(returnedData);
      });
      },
      error: function (jqXHR, textStatus, errorThrown) { alert('Something went wrong.'); }
    });
  });

  $("#dataTableSenior").on("click", ".btn-delete-senior", function(e) {
    senior_id_glob = dataTableSenior.row($(this).parents('tr')).data()["id"];
    var full_name = dataTableSenior.row($(this).parents('tr')).data()["full_name"];
    $('#exampleModalDeleteSenior').find('.modal-body-delete').append('Are you sure you want to delete senior <strong>' + full_name + '</strong>?');
    $('#exampleModalDeleteSenior').modal('show');
  });

  $('#exampleModalDeleteSenior').on('hidden.bs.modal', function () {
    $('#exampleModalDeleteSenior').find('.modal-body-delete').text('');
  })
}
// End Senior ---------



















function setNavigation() {
  $('.navbar__list li a').click(function(e) {
      var link = $(this);
      var item = link.parent("li");
      
      if (item.hasClass("active")) {
          item.removeClass("active").children("a").removeClass("active");
      } else {
          item.addClass("active").children("a").addClass("active");
      }

      if (item.children("ul").length > 0) {
          var href = link.attr("href");
          link.attr("href", "#");
          setTimeout(function () { 
              link.attr("href", href);
          }, 300);
          e.preventDefault();
      }
  });
}