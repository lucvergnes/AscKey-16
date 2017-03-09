//   ###   AscKey encode 2.2.0   ###

//Created by Luc Vergnes
//Fin this project on Github: https://github.com/lucvergnes/AscKey-16-text-obfuscator.git


//Encrypting function.
function Encrypt(input){

    //Create output and key variables
    var output = "";
    var key = "";

    //Make four random numbers for the keys
    var rand1 = 5 + (Math.floor(Math.random() * 5));
    var rand2 = 125 + (Math.floor(Math.random() * 125));
    var rand3 = 50 + (Math.floor(Math.random() * 50));
    var rand4 = 6 + (Math.floor(Math.random() * 4));

    //Make a random character variable
    var randch = [];

    //Set the different characters for the key (just because it looks nice)
    var seperators = ['f','g','c','a','e','d'];

    //Now add one or two randomly selected characters between the numbers in the key
    for(var j = 0; j < 3; j ++) {
        var size = 1 + Math.floor(Math.random() * 2);
        var str = "";
        for(var k = 0; k < size; k ++) {
            str += seperators[(Math.floor(Math.random() * seperators.length))];
        }
        randch[j] = str;
    }

    //Make the final key string
    key += rand1.toString() + randch[0] + rand2.toString() + randch[1] + rand3.toString() + randch[2] + rand4.toString();

    //Now encrypt each character with the key and add it to the output string
    for(var i = 0; i < input.length; i ++) {

        var currentasc = input.charCodeAt(i);
        var outputasc = currentasc ;
        outputasc = outputasc * rand1;
        outputasc += rand2;
        outputasc += rand3;
        outputasc = outputasc * rand4;
        output += outputasc.toString() + ' ';
    }

    //Delete the last ' ' that was added
    output = output.substring(0,output.length-1);

    //Make an array with the output and the key
    var out = [output,key];

    //Return the array
    return out;
}

//Decrypting function
function Decrypt(input,key){

    //Create output variable
    var output = "";

    //Split the key with the g f c a e and d characters
    var keyval = key.split(/[gfcaed]+/);

    //Split the input with spaces (' ')
    var charvalin = input.split(' ');

    //Decode each number in the input string with the key
    for(var i = 0; i < charvalin.length; i ++){

        var charvalout = charvalin[i];
        charvalout = charvalout / keyval[3];
        charvalout -= keyval[2];
        charvalout -= keyval[1];
        charvalout = charvalout / keyval[0];

        //Add it to the output string
        output += String.fromCharCode(charvalout);
    }

    //Return the output
    return output;
}

