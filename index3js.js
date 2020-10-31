'use strict';

$(document).ready(function () {
  retrieveLastIdValue();
})

var lastId = localStorage.getItem("lastId");
var solicitations = localStorage.getItem("solicitations");

function retrieveLastIdValue(){
  if (lastId == null) {
    lastId = 0;
  } else {
    lastId = JSON.parse(lastId);
  }
}

function save() {

  var formData = {
    id: ++lastId,
    name: $("#nomeSolicitanteIn").val(),
    sector: $("#setorIn").val(),
    school: $("#escolasIn").val(),
    date: $("#dataIn").val(),
    departure: $("#saidaIn").val(),
    arrival: $("#retornoIn").val(),
    peopleAmount: $("#numPessoasIn").val(),
    agenda: $("#programacaoIn").val(),
    observation: $("#observacaoArea").val(),
  }

  if (solicitations == null) {
    localStorage.setItem("solicitations", JSON.stringify([formData]));
  }else{
    solicitations = JSON.parse(solicitations);
    solicitations.push(formData);
    localStorage.setItem("solicitations", JSON.stringify(solicitations));
  }
}