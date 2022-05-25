
const monto = document.getElementById('monto');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const btnReset= document.getElementById('resetall');
const llenarTabla = document.querySelector('.lista-tabla tbody');

btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, interes.value, tiempo.value);
})


function calcularCuota(monto, interes, tiempo){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let pagoInteres=0, pagoCapital = 0, cuota = 0, plazo = 0, pagoDegravamen=0, TotalInteres=0, totalpagar=0, totalpagos=0;

    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);

    for(let i = 1; i <= tiempo; i++) {
        plazo=i
        pagoInteres = parseFloat(monto*(interes/100));
        TotalInteres=TotalInteres+pagoInteres;
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto-pagoCapital);
        pagoDegravamen = 0.005*monto;
        totalpagar=pagoDegravamen+cuota;
        totalpagos=totalpagar+totalpagos;


        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${plazo.toFixed(0)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
            <td>${pagoDegravamen.toFixed(2)}</td>
            <td>${totalpagar.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row)

    
    
    } 
    var cuota1=cuota
    var monto1=monto
    var plazo1=tiempo
    var interes1=interes

    var CI=  Math.pow(monto1 *(1 + interes1/100),plazo1)

    document.getElementById("rmonto").value = cuota1

   
    document.getElementById("rinteres").value = TotalInteres

    
    document.getElementById("rpagototal").value = totalpagos
}



