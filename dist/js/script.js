// navbar fixed
window.scroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
};


const ctx = document.getElementById('chart');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1D', '1W', '1M', '3M', 'YTD', '1Y', 'ALL'],
    datasets: [{
      label: '# of Votes',
      data: [12, 17, 14, 15, 16, 10, 15],
      borderWidth: 1,
      fill: false,
    tension: 0.1,
    borderColor: 'rgb(79, 192, 192)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});


