var label1 = [
    [
    [1,1528],
    [2,10118],
    [3,26473],
    [4,56385],
    [5,108376],
    [6,174796],
    [7,287008],
    [8,410088],
    [9,538883],
    [10,743198]



    ]
];
var label2 = [
[1,"Maret"],
    [2,"April"],
    [3,"Mei"],
    [4,"Juni"],
    [5,"Juli"],
    [6,"Agustus"],
    [7,"September"],
    [8,"Oktober"],
    [9,"November"],
    [10,"Desember"]


];

var label3 = [
    [
        [3, 1311],
        [4, 7804],
        [5, 17552],
        [6, 28703],
        [7, 37338],
        [8, 41420],
        [9, 61321],
        [10, 58418],
        [11, 71420],
        [12, 109963],



    ]
];
var label4 = [
    [3, "Mar"],
    [4, "Apr"],
    [5, "May"],
    [6, "Jun"],
    [7, "Jul"],
    [8, "Aug"],
    [9, "Sept"],
    [10, "Oct"],
    [11, "Nov"],
    [12, "Dec"],


];

var label5 = [
    [
    [1,7086139],
    [2,10632131],
    [3,13678043],
    [4,16753801],
    [5,20681901]

    ]
];
var label6 = [
    [1,"Agustus"],
    [2,"September"],
    [3,"Oktober"],
    [4,"November"],
    [5,"Desember"]


];



window.onload = function (container) {
    Flotr.draw(document.getElementById("grafik"), label1, {
        title: "Maret - Desember 2020",
        HtmlText : false,
        bars: {
            show: true,
            barWidth: 0.25,
        },
        xaxis: {
            ticks: label2,
            labelsAngle: 30
        },
        colors: ["red"]
        
    });

    Flotr.draw(document.getElementById("grafik2"), label3, {
        title: "Desember 2020 - Februari 2021",
        HtmlText : false,
        bars: {
            show: true,
            barWidth: 0.25,
        },
        xaxis: {
            ticks: label4,
            mode: 'time',
            labelsAngle: 45
        },
        colors: ["blue"],
        
    });

    Flotr.draw(document.getElementById("grafik3"), label5, {
        title: "Agustus - Desember 2020",
        HtmlText : false,
        bars: {
            show: true,
            barWidth: 0.25,
        },
        xaxis: {
            ticks: label6,
            labelsAngle: 30
        },
        colors: ["green"],
        
    });
    
};
