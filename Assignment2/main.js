import {simple ,compound} from './function.js';
import readline from 'readline-sync';

function main(){
 var choice=readline.question("enetr ur choice"
 +"\n 1 for simpleInterest"
 +"\n 2 for compoundInterest\n"
 );
 switch(choice){
    case '1':
        simple();
        break;
    case '2':
        compound();
        break;
    default:
        console.log("enter a valid choice");
        break;
 }
}
main();