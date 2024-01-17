document.addEventListener('DOMContentLoaded', function() {
    var ctxLocation = document.getElementById('revenueByLocationChart').getContext('2d');
    var revenueByLocationChart = new Chart(ctxLocation, {
      type: 'bar',
      data: {
        labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Kirkland', 'Redmond'],
        datasets: [{
          label: 'Revenue by Location',
          data: [120000, 150000, 100000, 75000, 50000, 30000],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: 'rgba(76, 175, 80, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    var ctxJobType = document.getElementById('revenueByJobTypeChart').getContext('2d');
    var revenueByJobTypeChart = new Chart(ctxJobType, {
      type: 'bar',
      data: {
        labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HVAC Replacements', 'Maintenance', 'Material Sales'],
        datasets: [{
          label: 'Revenue by Job Type',
          data: [200000, 125000, 175000, 75000, 95000, 50000, 20000],
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          borderColor: 'rgba(33, 150, 243, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  