import 'react-native';
import React from 'react';

exports.getData = () => {
    try{
       const resu =  fetch('https://jsonplaceholder.typicode.com/posts/1');
        console.log(resu);
        return(resu)
    }
    catch(err){
        console.log(err);
    }
}


exports.sendString=()=>{
    return "Hello this is kashaf";
}

exports.sendEmail=()=>{
    return"kashaf.123@gmail.com";
}

exports.sendPassword= ()=>{
    return "Abc123#"
}