const chkBin = document.getElementById('input_check_bin');
const chkDec = document.getElementById('input_check_dec');
const chkOct = document.getElementById('input_check_oct');
const chkHex = document.getElementById('input_check_hex');
const inputNum = document.getElementById('input_numero');

const btnCalc = document.getElementById('btn_calc').addEventListener('click', () => {
    var num = document.getElementById('input_numero').value;
    var entradaValida = /^[0-9a-zA-Z]+$/;

    if(num == '' || baseNum == ''){
        inputNum.value = '';
        inputNum.placeholder = 'Você deve completar os campos';
    }else if(!entradaValida.test(num)){
        inputNum.value = '';
        inputNum.placeholder = 'Você não pode usar caracteres especiais';
    }else {
        const resBin = document.getElementById('bin_res');
        const resDec = document.getElementById('dec_res');
        const resOct = document.getElementById('oct_res');
        const resHex = document.getElementById('hex_res');

        let decimal = 0;
        let octal = 0;
        let binario = 0;
        let hexadecimal = 0;

        if(baseNum == 'binario'){
            if(/[a-zA-Z]/.test(num) || /[2-9]/.test(num)){
                inputNum.value = '';
                inputNum.placeholder = 'Apenas os digítos 1 e 0 são válidos para esta base';
            } else{
                decimal = parseInt(num, 2);
                octal = decimal.toString(8)
                hexadecimal = decimal.toString(16)

                resBin.innerText = `-----`;
                resDec.innerText = decimal;
                resOct.innerText = octal;
                resHex.innerText = hexadecimal.toUpperCase();
            }
        } else if(baseNum == 'decimal'){
            if(/[a-zA-Z]/.test(num)){
                inputNum.value = '';
                inputNum.placeholder = 'Essa base não aceita letras';
            } else{
                decimal = Number(num);
                octal = decimal.toString(8);
                hexadecimal = decimal.toString(16);
                binario = decimal.toString(2);

                resDec.innerText = `-----`;
                resBin.innerText = binario;
                resOct.innerText = octal;
                resHex.innerText = hexadecimal.toUpperCase();
            }
        } else if(baseNum == 'octadecimal'){
            if(/[a-zA-Z]/.test(num) || num.includes('9')){
                inputNum.value = '';
                inputNum.placeholder = 'O número não pode ser convertido';
            } else{
                decimal = parseInt(num, 8);
                binario = decimal.toString(2);
                hexadecimal = decimal.toString(16);

                resOct.innerText = `-----`;
                resBin.innerText = binario;
                resDec.innerText = decimal;
                resHex.innerText = hexadecimal.toUpperCase();
            }
        } else{
            if(/[g-zG-Z]/.test(num)){
                inputNum.value = '';
                inputNum.placeholder = 'Insira letras válidas para a base hexa';
            } else{
                decimal = parseInt(num, 16);
                octal = decimal.toString(8);
                binario = decimal.toString(2);
                
                resHex.innerText = `-----`;
                resBin.innerText = binario;
                resDec.innerText = decimal;
                resOct.innerText = octal;
            }
        }
    }

})
var baseNum = '';

chkBin.addEventListener('click', () => {
    if(chkBin.click){
        chkDec.style.backgroundColor = '#021024';
        chkHex.style.backgroundColor = '#021024';
        chkOct.style.backgroundColor = '#021024';
        chkDec.style.color = '#fff';
        chkHex.style.color = '#fff';
        chkOct.style.color = '#fff';
        chkBin.style.backgroundColor = '#fff'
        chkBin.style.color = '#76affe';
        baseNum = 'binario';
    }else{
        baseNum = '';
    }
})
chkDec.addEventListener('click', () => {
    if(chkDec.click){
        chkBin.style.backgroundColor = '#021024';
        chkHex.style.backgroundColor = '#021024';
        chkOct.style.backgroundColor = '#021024';
        chkHex.style.color = '#fff';
        chkOct.style.color = '#fff';
        chkBin.style.color = '#fff';
        chkDec.style.backgroundColor = '#fff';
        chkDec.style.color = '#76affe';
        baseNum = 'decimal'
    }else{
        baseNum = '';
    }
})
chkHex.addEventListener('click', () => {
    if(chkHex.click){
        chkBin.style.backgroundColor = '#021024';
        chkDec.style.backgroundColor = '#021024';
        chkOct.style.backgroundColor = '#021024';
        chkDec.style.color = '#fff';
        chkOct.style.color = '#fff';
        chkBin.style.color = '#fff';
        chkHex.style.backgroundColor = '#fff';
        chkHex.style.color = '#76affe';
        baseNum = 'hexadecimal';
    }else{
        baseNum = '';
    }
})
chkOct.addEventListener('click', () => {
    if(chkOct.click){
        chkBin.style.backgroundColor = '#021024';
        chkHex.style.backgroundColor = '#021024';
        chkDec.style.backgroundColor = '#021024';
        chkDec.style.color = '#fff';
        chkHex.style.color = '#fff';
        chkBin.style.color = '#fff';
        chkOct.style.backgroundColor = '#fff';
        chkOct.style.color = '#76affe';
        baseNum = 'octadecimal';
    }else{
        baseNum = '';
    }
})

const navGame = document.getElementById('nav_gam');
const navConversor = document.getElementById('nav_con');

