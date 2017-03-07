//Created by Luc Vergnes
//AscKey encode 1.0

function Encode(input){

    var output = "";
    var key = "";

    var rand1 = 400 + (Math.floor(Math.random() * 4000));
    var rand2 = 500 + (Math.floor(Math.random() * 500));
    var rand3 = 200 + (Math.floor(Math.random() * 100));
    var rand4 = 6 + (Math.floor(Math.random() * 4));

    var randch = [];

    var seperators = ['f','g','c','a','e','d'];

    for(var j = 0; j < 3; j ++) {
        var size = 1 + Math.floor(Math.random() * 2);
        var str = "";
        for(var k = 0; k < size; k ++) {
            str += seperators[(Math.floor(Math.random() * seperators.length))];
        }
        randch[j] = str;
    }

    key += rand1.toString() + randch[0] + rand2.toString() + randch[1] + rand3.toString() + randch[2] + rand4.toString();

    for(var i = 0; i < input.length; i ++) {

        var currentasc = input.charCodeAt(i);
        var outputasc = currentasc ;
        outputasc += rand1;
        outputasc += rand2;
        outputasc += rand3;
        outputasc = outputasc * rand4;
        output += outputasc.toString() + ' ';
    }

    output = output.substring(0,output.length-1);

    var out = [output,key];
    console.log("Encode: "+ out[0] + " - " + out[1]);
    return out;
}

function Decode(input,key){
    var output = "";

    var keyval = key.split(/[gfcaed]+/);
    var charvalin = input.split(' ');

    for(var i = 0; i < charvalin.length; i ++){

        var charvalout = charvalin[i];
        charvalout = charvalout / keyval[3];
        charvalout -= keyval[2];
        charvalout -= keyval[1];
        charvalout -= keyval[0];
        console.log("Test: " + "(((" + charvalin[i] + "+" + keyval[3] + ")" + "-" + keyval[2] + ")" + "+" + keyval[1] + ")" + "-" + keyval[0] + ") = " + charvalout);

        output += String.fromCharCode(charvalout);
    }

    console.log("Decode: " + output);
    return output;
}
