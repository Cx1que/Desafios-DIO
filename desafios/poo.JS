class formaDeBolo{
    constructor(saborDaMassa, recheio){
        this.saborDaMassa = saborDaMassa
        this.recheio = recheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.recheio}`)
    }
    assar(){
        console.log(`Bolo de ${this.saborDaMassa} assando`)
    }
}

let boloFesta = new formaDeBolo("Massa de chocolate", "de Nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.saborDaMassa = "Floresta negra"

boloFesta.escrever()
boloPremium.escrever()
boloFesta.assar()