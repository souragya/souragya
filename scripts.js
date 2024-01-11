function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Generate sample investment chart
var investmentCtx = document.getElementById('investmentChart').getContext('2d');
var investmentChart = new Chart(investmentCtx, {
    type: 'line',
    data: {
        labels: ['2022', '2023', '2024', '2025', '2026'],
        datasets: [{
            label: 'Investment Performance',
            data: [20000, 22000, 25000, 28000, 30000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Generate sample growth projections chart
var growthCtx = document.getElementById('growthChart').getContext('2d');
var growthChart = new Chart(growthCtx, {
    type: 'bar',
    data: {
        labels: ['2022', '2023', '2024', '2025', '2026'],
        datasets: [{
            label: 'Growth Projections',
            data: [10, 12, 15, 18, 20],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
