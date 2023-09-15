import { useEffect, useState } from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import  {LoginMail}  from '../services/ApiService';
  import  {useNavigate}  from 'react-router-dom';
   import { useContextState } from "../../contextState";


const Login = () => {
    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const navigate = useNavigate();
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
              navigate("/buscador")
            })
            .catch(error => {      
              setIsLoading(true);
              alert("mallllll");
            });
        }
    }

    return (
            <View style={styles.container}>
              {!isLoading ? (
                <>
              <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={(mail) => setEmail(mail)}
                /> 
            </View> 
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(pass) => setPassword(pass)}
                /> 
            </View> 
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text> 
            </TouchableOpacity> 
            <TouchableOpacity style={styles.loginBtn} onPress={onPressed}>
                <Text style={styles.loginText} >LOGIN</Text> 
            </TouchableOpacity>
            </>
    ) : (
            <div className="App">
              <h1>Cargando...</h1>
            </div>
            )}
            </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });

export default Login;