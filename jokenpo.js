function jogar(){

    if(document.getElementById('pedra').Checked == false &&
        document.getElementById('papel').Checked == false &&
        document.getElementById('tesoura').Checked == false){

            alert('Selecione uma opção.')

    }
    else{

        let sorteio = math.floor(math.random()*3);
        switch(sorteio){

            case 0 :
                document.getElementById().src="pcpedra.png";
                break;
                case 1: document.getElementById("pc").src="pcappel.png";
                break;
                case 2: document.getElementById("pc"). src = "pctesoura.png";
                break; 
        }
    }
}
