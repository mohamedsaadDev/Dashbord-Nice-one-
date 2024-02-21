export const dataBar = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    datasets: [
        {
        // label: 'Net Profit',
        data: [100, 150, 120, 180, 150, 200,220,250,300,100,70,20],
        backgroundColor: 'rgb(126,34,206)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0,
        barThickness: 15,
        },
    ],  
};
export const  optionsBar = {
    scales: {
    x: {
        type: 'category',
        grid: {
        display: false,
        },
    },
    y: {
        beginAtZero: false,
        grid: {
        color: 'rgb(126, 34, 206)',
        },
        ticks: {
        stepSize: 70,
        },
    },
    },
    plugins: {
    legend: {
        display: false,
        position: undefined,
    },
    },
    categorySpacing: 100,
    categoryPercentage: 0.5,
    barPercentage: 0.2,
};
export const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
    label: 'Monthly Sales',
    borderColor: 'rgb(75, 192, 192)',
    data: [150, 200, 300, 250, 180],
    fill: false,
    }],
};
export const optionsLine = {
    maintainAspectRatio: false,
    scales: {
    x: {
        type: 'category',
        title: {
        display: true,
        text: 'Months',
        },
    },
    y: {
        title: {
        display: true,
        text: 'Sales',
        },
    },
    },
};