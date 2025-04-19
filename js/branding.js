document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('caseChart').getContext('2d');
  
  // Kiểm tra kích thước màn hình
  const isMobile = window.innerWidth < 768;
  
  // Đăng ký plugin datalabels nếu có
  if (Chart.register) {
      Chart.register(ChartDataLabels);
  }
  
  // Tạo biểu đồ
  const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: [
              'PR Hợp tác báo chí\n150 triệu VND',
              'SEO & Content Marketing\n450 triệu VND',
              'Google Ads & Display Network\n600 triệu VND',
              'Facebook & Instagram Ads\n600 triệu VND',
              'PR & Hợp tác báo chí\n750 triệu VND',
              'OOH (Quảng cáo ngoài trời)\n450 triệu VND'
          ],
          datasets: [{
              data: [5, 15, 20, 20, 25, 15],
              backgroundColor: [
                  '#44193F', // 5% - PR Hợp tác báo chí 
                  '#FF5225', // 15% - SEO & Content Marketing
                  '#051947', // 20% - Google Ads
                  '#FFCC00', // 20% - Facebook & Instagram 
                  '#52B6CF', // 25% - PR & Hợp tác báo chí
                  '#574D89'  // 15% - OOH
              ],
              borderWidth: 0
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
              padding: isMobile ? 0 : 20
          },
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return context.parsed + '% - ' + context.label.split('\n')[0];
                      }
                  }
              },
              datalabels: {
                  color: '#fff',
                  font: {
                      weight: 'bold',
                      size: 14
                  },
                  formatter: function(value) {
                      return value + '%';
                  }
              }
          }
      }
  });
  
  // Xử lý responsive
  window.addEventListener('resize', function() {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
          myChart.options.layout.padding = newIsMobile ? 0 : 20;
          myChart.update();
      }
  });
});
