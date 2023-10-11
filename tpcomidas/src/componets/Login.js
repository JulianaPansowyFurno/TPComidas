import { useEffect, useState } from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import  {LoginMail}  from '../services/ApiService';
   import { useContextState } from "../../contextState";
   import { ListComponentStyle } from './styles.js';
   import { LoginStyles } from './styles.js';



const Login = ({navigation}) => {
    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { contextState, setContextState } = useContextState();

    const onPressed = () => {
        const user =
        {
          email: mail,
          password: pass
        }
        if(mail == "" || pass == "" )
        {
          alert("Incompleto")
            console.log("mal");
        }
        else if(mail == "" && pass == ""){
            console.log("mal");
            alert("Incompleto")
        }
        else{
          setIsLoading(true);
            LoginMail(user)
            .then(response => {      
              setIsLoading(false);
              setContextState({ newValue: response, type: "SET_USER_TOKEN"});
              navigation.navigate('Buscador')
            })
            .catch(error => {      
              setIsLoading(true);
              alert("mallllll");
            });
        }
    }

    return (
      <div   style={ListComponentStyle.background}>

            <View>
              {!isLoading ? (
                <>
              <View style={LoginStyles.inputView}>
                <TextInput
                style={LoginStyles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={(mail) => setEmail(mail)}
                /> 
            </View> 
            <View style={LoginStyles.inputView}>
                <TextInput
                style={LoginStyles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(pass) => setPassword(pass)}
                /> 
            </View> 
            <TouchableOpacity>
            </TouchableOpacity> 
            <TouchableOpacity style={LoginStyles.loginBtn} onPress={onPressed}>
                <Text style={LoginStyles.loginText} >LOGIN</Text> 
            </TouchableOpacity>
            </>
    ) : (
            <div className="App">
              <h1>Cargando...</h1>
            </div>
            )}
            </View>
            </div>

    );
}

export default Login;