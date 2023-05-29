function setFilterType(){
    if(filtro.value.toLowerCase()=='cidade'){
        document.getElementById('wrapper-destinos').style.display='inline-block';
        document.getElementById('top-dest').style.display='block';
    }else{
        document.getElementById('wrapper-destinos').style.display='none';
        document.getElementById('top-dest').style.display='none';
    }
}

function search_destino() {
    let input = document.getElementById('ibusca').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('container-est');
    let filtro = document.getElementById('filtro');

    if(filtro.value.toLowerCase()=='cidade'){
        for (i = 0; i < x.length; i++) { 
            console.log(x[i].getAttribute('cidade'))
            if(x[i].getAttribute('cidade') != null){
                if (!x[i].getAttribute('cidade').toLowerCase().includes(input)) {
                    x[i].style.display='none';
                }
                else {
                    x[i].style.display='inline-block';
                }
            }
        }
    }else{
        for (i = 0; i < x.length; i++) { 
            if(x[i].getAttribute('nome') != null){
                if (!x[i].getAttribute('nome').toLowerCase().includes(input)) {
                    x[i].style.display='none';
                }
                else {
                    x[i].style.display='inline-block';
                }
            }
        }
    }
}