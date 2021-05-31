
DateViews();
setInterval("DateViews()", 1000);

function DateViews(){
    var modified = new Date("12/20/2020");
    var modif = modified.toLocaleDateString()
    var current_day = new Date();
    var today = current_day.toLocaleDateString();
    var difference = (current_day - modified)/(1000* 60 * 60 * 24)

    document.getElementById("last_modified").textContent = "Date last modified: " + modif;
    document.getElementById("current_view").textContent = "Current date: " + today;
    document.getElementById("date_difference").textContent = "Difference between dates: " + Math.floor(difference) + " days"
}
