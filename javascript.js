const pilihan = ['batu','gunting','kertas'];

function getComputerChoice() {
    const hasil = Math.floor(Math.random()*3);
    return pilihan[hasil];
}

function getHumanChoices(){
    let humanChoices = prompt('pilihanmu?');
    humanChoices= humanChoices.toLowerCase();
    if (!humanChoices){
        return getHumanChoices();
    }else if (!pilihan.includes(humanChoices)){
        return getHumanChoices();
    }else{
        return humanChoices;
    }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
    const humanChoices = getHumanChoices();
    const computerChoices = getComputerChoice();
    console.log(`Ronde ${i}`);
    console.log('Pilihanmu:', humanChoices);
    console.log('Pilihan komputer:', computerChoices);
    if (humanChoices === computerChoices) {
        console.log('Seri!');
    } else if (humanChoices==='batu'&&computerChoices==='gunting'){
        humanScore+=1;
        console.log('Kamu menang!');
    } else if (humanChoices==='batu'&&computerChoices==='kertas'){
        computerScore+=1;
        console.log('Komputer menang!');
    } else if (humanChoices==='gunting'&&computerChoices==='kertas'){
        humanScore+=1;
        console.log('Kamu menang!');
    } else if (humanChoices==='gunting'&&computerChoices==='batu'){
        computerScore+=1;
        console.log('Komputer menang!');
    } else if (humanChoices==='kertas'&&computerChoices==='batu'){
        humanScore+=1;
        console.log('Kamu menang!');
    } else if (humanChoices==='kertas'&&computerChoices==='gunting'){
        computerScore+=1;
        console.log('Komputer menang!');
    }
    console.log('Skor sementara - Kamu:', humanScore, '| Komputer:', computerScore);
    console.log('----------------------');
}

console.log('Permainan selesai!');
console.log('Skor Akhir Kamu:', humanScore);
console.log('Skor Akhir Komputer:', computerScore);
if (humanScore > computerScore) {
    console.log('Kamu menang keseluruhan!');
} else if (computerScore > humanScore) {
    console.log('Komputer menang keseluruhan!');
} else {
    console.log('Hasil akhir seri!');
}

