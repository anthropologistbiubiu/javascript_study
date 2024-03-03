

let total = 0


function Increase(){
    total += 1
}
async function ConQuest(){

    requests = []
    for (let i = 0;i < 100;i++){
       requests.push(Increase())
    }
    await Promise.all(requests)
}


async function main() {
    for (let i = 0; i < 10; i++) {
        await  ConQuest()
    }
    console.log(total)
}

main();



