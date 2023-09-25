

let header = document.querySelector('header span');
let items = [];

let turn = 'x';

function end(num1,num2,num3){
    header.innerHTML = `${items[num1]} Winner`

    document.getElementById('item'+num1).style.background="#000";
    document.getElementById('item'+num2).style.background="#000";
    document.getElementById('item'+num3).style.background="#000";
    document.getElementById('item'+num1).style.color="#fff";
    document.getElementById('item'+num2).style.color="#fff";
    document.getElementById('item'+num3).style.color="#fff";

    setInterval(()=> 
    header.innerHTML += '.'
    ,1000);

    setTimeout(() => {
        window.location.reload();
    }, 4000);
    
}

function winner(){
    for (let i = 1; i < 10; i++){
        items[i] = document.getElementById("item"+ i).innerHTML;
    }
    // العرض
    if(items[1]=== items[2] && items[2]=== items[3] && items[1] != ''){
        end(1,2,3);
    }
    else if(items[4]=== items[5] && items[5]=== items[6] && items[5] != ''){
        end(4,5,6);
    }
    else if(items[7]=== items[8] && items[8]=== items[9] && items[8] != ''){
        end(7,8,9);
    }

    //الطول 
    else if(items[1]=== items[4] && items[4]=== items[7] && items[1] != ''){
        end(1,4,7);
    }
    else if(items[2]=== items[5] && items[5]=== items[8] && items[5] != ''){
        end(2,5,8);
    }
    else if(items[3]=== items[6] && items[6]=== items[9] && items[6] != ''){
        end(3,6,9);
    }

    //مقصات
    else if(items[1]=== items[5] && items[5]=== items[9] && items[5] != ''){
        end(1,5,9);
    }
    else if(items[3]=== items[5] && items[5]=== items[7] && items[7] != ''){
        end(3,5,7);
    }
    //تعادل 
    else if(items[1]!= '' && items[2]!== '' && items[1]!= '' &&
            items[4]!= '' && items[5]!== '' && items[6]!= '' &&
            items[7]!= '' && items[8]!== '' && items[9]!= ''){
                header.innerHTML = `Draw <i class="fa-solid fa-handshake" style="color: #0F2C59;"></i>`;
                setInterval(()=> 
                    header.innerHTML += '.'
                ,1000);

                setTimeout(() => {
                    window.location.reload();
                }, 4000);
    }

}

function game(id)
{
    let element = document.getElementById(id);

    if(turn=='x' && element.innerHTML=='' ){
        element.innerHTML='X';
        turn='o';
        header.textContent='O';
    }
    if(turn=='o' && element.innerHTML==''){
        element.innerHTML='O';
        turn='x';
        header.textContent='X';
    }
    winner();
}