import 'react-native';
import React from 'react';
import route from './JavaScriptFiles/routes'
// const axios  = require("axios");


test('Checking async awaits', async () => {
    try{
        const data = await fetch('http://jsonplaceholder.typicode.com/comments/1');
        expect(data).toEqual(
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }
        );
    }
    catch(err){
        console.log(err);
    }
  });



test('get Comments', ()=>{
    try{
    const result = fetch('http://jsonplaceholder.typicode.com/comments')
    .then((res)=>expect(res).not.toBeUndefined())
    }
    catch(err){
        console.log(err);
    }
})


test('post comments', ()=>{
    try{
        fetch('http://jsonplaceholder.typicode.com/comments',{
        method: 'post',
        body:{
            name:'kashaf',
            email: 'kashaf978@gmail.com',
            body:'adhajsdasdjkasdkda'
    }})
        .then((res)=>expect(res.status).toBeGreaterThanOrEqual(200));
        
    }
    catch(err){
        console.log(err);
    }

})

test('Delete comments', ()=>{
    try{
        fetch('http://jsonplaceholder.typicode.com/comments/15',{
        method: 'Delete',
        })
        .then((res)=>expect(res.status).toBeGreaterThanOrEqual(200));
        
    }
    catch(err){
        console.log(err);
    }
})