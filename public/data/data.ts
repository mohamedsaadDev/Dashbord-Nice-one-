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
        label: 'Net Sales',
        data: [100, 150, 120, 180, 150, 200,220,250,300,100,70,20],
        backgroundColor: 'rgb(126,34,206)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0,
        barThickness: 15,
        },
    ],  
};
export const dataLine = {
    labels: ["January","February","March","April","May","June",],
    datasets: [{
    label: 'Monthly Sales',
    borderColor: 'rgb(75, 192, 192)',
    data: [150, 250, 300, 200, 180],
    fill: false,
    }],
};
