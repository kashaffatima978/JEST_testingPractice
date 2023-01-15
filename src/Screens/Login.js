import React, { useState } from "react"
import {View,Text,StyleSheet,Image, TextInput, Button} from "react-native"



const Login = ()=>{
    const [users, setUser] = ([{name: '', email:''}])
    const[ name, setName]=useState('');
    const[ email, setEmail]=useState('');

    function settingData(name, email){
        setUser([...users, {name: name , email: email}]);
        return true;
    }
    var getData =()=>{
        return{name:name,email: email};
    }

return(
    <View>
        <Text>Name:</Text>
        <TextInput value="name" onChangeText={setName}></TextInput>
        <Text>Email:</Text>
        <TextInput value="email" onChangeText={setEmail}></TextInput>
        <Button onPress={()=>{console.log('hello')}} title={'Login'}/>
    </View>
)
    
    
}

export default Login;