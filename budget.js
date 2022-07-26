

$(document).ready(function(){
    $("#dropdowner").dropdown();

})



anychart.onDocumentReady(function(){
    let budget = [
        {expense: 'gas', value: 67},
        {liability: 'subscriptions', value: 23}
    ]
    
})

let chart = anychart.pie();

chart.title("Your Budget!");

chart.data(budget);

chart.container('container');
chart.draw();



