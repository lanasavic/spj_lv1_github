function Spremi(){
	/*"use strict";

	var table = document.getElementById("table");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4icon = document.createElement("td");

	var row = document.createElement("tr");
    td1.innerHTML = document.getElementById("nazivpredmeta").value;
    td2.innerHTML = document.getElementById("godinasem").value;
    td3.innerHTML = document.getElementById("ects").value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4icon);

    table.appendChild(row);*/

    if ($("#table tbody").length == 0) {
        $("#table").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#table tbody").append(
        "<tr>" +
        "<td>" + $("#nazivpredmeta").val() + "</td>" +
        "<td>" + $("#godinasem").val() + "</td>" +
        "<td>" + $("#ects").val() + "</td>" +
        "<td>" +
        "<button type='button' onclick='deleteRow(this);' class='btn btn-default'>" +
        "<span class='glyphicon glyphicon-remove' />" +
        "</button>" +
        "</td>" +
        "<td>" +
        "<input type='checkbox' onclick='checkRow(this);' class='btn btn-default'>" +
        "<span class='glyphicon glyphicon-ok' />" +
        "</button>" +
        "</td>" +
        "</tr>");
}

function deleteRow(ctl) {
    $(ctl).parents("tr").remove();
}

function checkRow(ctl) {
    $(ctl).parents("tr").css('background-color','#dc7777');
}