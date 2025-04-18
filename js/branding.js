const ctx = document.getElementById('caseChart').getContext('2d');

// Kiểm tra xem ChartDataLabels đã được đăng ký chưa
if (typeof ChartDataLabels !== 'undefined') {
  Chart.register(ChartDataLabels);
}

// Kiểm tra kích thước màn hình
const isMobile = window.innerWidth < 768;

// Cấu hình chart
const chartConfig = {
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
    responsive: true, // Bật responsive
    maintainAspectRatio: true, // Giữ tỷ lệ khung hình
    layout: {
      padding: isMobile ? 0 : 100 // Bỏ padding trên mobile
    },
    plugins: {
      legend: { 
        display: false // Ẩn legend để tiết kiệm không gian
      },
      datalabels: {
        display: isMobile ? false : true, // Ẩn datalabels trên mobile
        color: '#fff',
        anchor: 'center',
        align: 'center',
        offset: 0,
        clamp: true,
        font: {
          size: 9,
          weight: 'bold'
        },
        formatter: function(value) {
          return value + '%';
        }
      },
      tooltip: {
        enabled: true, // Luôn bật tooltip
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.formattedValue;
            return value + '% - ' + label.split('\n')[0];
          }
        }
      }
    }
  }
};

// Tạo biểu đồ
const myChart = new Chart(ctx, chartConfig);

// Xử lý responsive khi thay đổi kích thước màn hình
window.addEventListener('resize', function() {
  const newIsMobile = window.innerWidth < 768;
  if (newIsMobile !== isMobile) {
    // Cập nhật cấu hình biểu đồ nếu chuyển từ desktop sang mobile hoặc ngược lại
    myChart.options.layout.padding = newIsMobile ? 0 : 100;
    myChart.options.plugins.datalabels.display = !newIsMobile;
    myChart.update();
  }
});
