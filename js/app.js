function Spremi(){
	"use strict";

	var table = document.getElementById("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");    

	var row = document.createElement("tr");
    td1.innerHTML = document.getElementById("nazivpredmeta").value;
    td2.innerHTML = document.getElementById("godinasem").value;
    td3.innerHTML  = document.getElementById("ects").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.appendChild(row);
}