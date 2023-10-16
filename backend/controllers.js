let boletosDisponibles = {
    palco: 45,
    general: 100,
    preferencial: 200
};

let colaVenta = [];
let ingresoConcierto = [];
let idAsientoTipo;
let letraAsientoTipo;

class ordenamiento {
    constructor() {
        this.asientosDisponibles = {
            palco: boletosDisponibles.palco,
            general: boletosDisponibles.general,
            preferencial: boletosDisponibles.preferencial
        };
        this.palco = [];
        this.general = [];
        this.preferencial = [];
    }

    addPalco(palco) {
        this.palco = [...this.palco, ...palco];
        this.palco.sort((a, b) => a.numeroAsiento - b.numeroAsiento);
        this.asientosDisponibles.palco -= palco.length;
    }

    addGeneral(general) {
        this.general = [...this.general, ...general];
        this.general.sort((a, b) => a.numeroAsiento - b.numeroAsiento);
        this.asientosDisponibles.general -= general.length;
    }

    addPreferencial(preferencial) {
        this.preferencial = [...this.preferencial, ...preferencial];
        this.preferencial.sort((a, b) => a.numeroAsiento - b.numeroAsiento);
        this.asientosDisponibles.preferencial -= preferencial.length;
    }

    getAsientosDisponibles() {
        return this.asientosDisponibles;
    }
}


const ordenamientoClass = new ordenamiento();

function venderBoleto(tipo, nombreAsistente) {
    if (boletosDisponibles[tipo] > 0) {
        idAsientoTipo = 46;
        letraAsientoTipo = 'P'
        if (tipo != 'palco') {
            idAsientoTipo = tipo == 'general' ? 101 : 201;
            letraAsientoTipo = tipo == 'general' ? 'G' : 'PR';
        }
        
        let numeroBoleto = idAsientoTipo - boletosDisponibles[tipo];
        let numeroAsiento = idAsientoTipo - boletosDisponibles[tipo];
        let idBoleto = letraAsientoTipo + numeroAsiento;
        boletosDisponibles[tipo]--;

        colaVenta.push({
            tipoBoleto: tipo,
            numeroBoleto : idBoleto,
            numeroAsiento,
        });

        return { success: true, mensaje: `Boleto vendido: Tipo ${tipo}, Número ${idBoleto}, Asiento ${numeroAsiento}` };
    } else {
        return { success: false, mensaje: `Boletas agotadas para el tipo ${tipo}` };
    }
}

let asistentesIngresados = new Set();

function ingresarConcierto(idBoleto) {
    let buscarBoleto =  colaVenta.find(x => x.numeroBoleto == idBoleto);

    if (buscarBoleto) {
        if (asistentesIngresados.has(idBoleto)) {
            return { success: false, mensaje: `El asistente con boleto ${idBoleto} ya ha ingresado.` };
        }

        asistentesIngresados.add(idBoleto);
        ingresoConcierto.push(buscarBoleto);
        return { success: true, mensaje: `Bienvenido al concierto, disfrútalo !` };
    }
    return { success: false, mensaje: `Por favor compre su boleto para poder ingresar.` };
}

function ordenarAsistentes() {
    if (ingresoConcierto.length == 0) {
        return ordenamientoClass;
    }
    if (ingresoConcierto[0]['tipoBoleto'] == 'palco') {
        let arrayPalco = [];
        arrayPalco.push(ingresoConcierto[0])
        ordenamientoClass.addPalco(arrayPalco)
    }
    else if (ingresoConcierto[0]['tipoBoleto'] == 'general') {
        let arrayGeneral = [];
        arrayGeneral.push(ingresoConcierto[0])
        ordenamientoClass.addGeneral(arrayGeneral)
    }
    else {
        let arrayPreferencial = [];
        arrayPreferencial.push(ingresoConcierto[0])
        ordenamientoClass.addPreferencial(arrayPreferencial)

    }
    ingresoConcierto.shift();
    return ordenamientoClass;
}


module.exports = { venderBoleto, colaVenta, boletosDisponibles, ingresarConcierto, ordenarAsistentes };
