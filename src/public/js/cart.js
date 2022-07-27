
//checkbox function
const csa = document.getElementById('checkbox-select-all'); //csa == checkboxall
const cs = document.querySelectorAll('#checkbox-select'); //cs == checkbox
//set true all checkbox when checkboxall true and opposite
csa.onclick = function() {
    cs.forEach( select => select.checked = this.checked)
}
//set checkboxall true if all checkbox true and if 1 checkbox false then checkboxall false
cs.forEach(select => select.addEventListener('click', function() {
    csa.checked = cs.length == document.querySelectorAll('#checkbox-select:checked').length;
}));
//