import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../src/Screens/Login';


beforeAll(()=>{
    console.log('Test Suite started');
})
const multiplying = (a, b)=>{
    return a*b;
}



const exception  =()=>{
    throw new Error('you receieved an error');
}

test('test data', ()=>{
    login = renderer.create(<Login />).getInstance();

})


test('test decimal', ()=>{
    expect(multiplying(2.5 , 3)).toBeLessThan(9);
})

const users = ['kashaf', 'fatima', 'alishbah', 'mohsin'];
test('array contains', ()=>{
    expect(users).toContain('kashaf');
})

test('test exception', ()=>{
    expect(() => exception()).toThrow(/you receieved an error/) ;
})