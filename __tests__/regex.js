import 'react-native';
import React from 'react';
import routes from './JavaScriptFiles/routes';

test('testing String regex', () => {
    expect(routes.sendString()).toMatch(/kashaf/);
  });


test('testing email',()=>{
    expect(routes.sendEmail()).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
})

test('testing Password',()=>{
    expect(routes.sendPassword()).toMatch(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
})

