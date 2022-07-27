

$(document).ready(function(){
    $("#dropdowner").dropdown();

})



anychart.onDocumentReady(function(){
    var budget = [
        {expense: 'gas', value: 67},
        {liability: 'subscriptions', value: 23}
    ]
    
})

let chart = anychart.pie();

chart.title("Your Budget!");

chart.data(budget);

chart.container('#pieChart');
chart.draw();



