import readline from 'readline-sync';
export async function simple(){
    let principal=readline.questionInt("enter principal amount : ");
    let rateOfInterest=readline.questionInt("enter rate of interset : ");
    let term=readline.questionInt('enter term of the loan : ');
    const interst= (principal*rateOfInterest*term)/100;
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("simple interest is "+interst);


}
export async function compound(){
    let principal=readline.questionInt("enter principal amount : ");
    let rateOfInterest=readline.questionInt("enter rate of interset : ");
    let term=readline.questionInt('enter term of the loan : ');
    const interest= principal*((1+rateOfInterest/100)**term);
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Compound interest is "+interest.toFixed(2));
}