const ctx = document.getElementById('caseChart').getContext('2d');

Chart.register(ChartDataLabels);

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'PR Hợp tác báo chí\n150 triệu VND',
      'SEO & Content Marketing\n450 triệu VND',
      'Google Ads & \nDisplay Network\n600 triệu VND',
      'Facebook & Instagram Ads\n600 triệu VND',
      'PR & Hợp tác\n báo chí\n750 triệu VND',
      'OOH (Quảng cáo ngoài trời)\n450 triệu VND'
    ],
    datasets: [{
        
      data: [5, 15, 20, 20, 25, 15],
      backgroundColor: [
        '#44193F', // 5%
        '#FF5225', // 15%
        '#051947', // 20%
        '#FFCC00', // 20%
        '#52B6CF', // 25%
        '#574D89'  // 15%
      ]
    }]
  },
  options: {
    responsive: false, // ✨ tắt responsive để không bị méo
    maintainAspectRatio: false,
    layout: {
      padding: 100
    },
    plugins: {
      legend: { display: false },
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'end',
        offset: 10,
        clamp: false,
        font: {
          size: 9,
          weight: 'bold'
        },
        formatter: (value, ctx) =>
          ctx.chart.data.labels[ctx.dataIndex].replace(' - ', '\n')
      }
    }
  }
  
});
