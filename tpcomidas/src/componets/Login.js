import { useEffect, useState } from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
  import { StatusBar } from 'expo-status-bar';
  import { LoginMail } from '../services/ApiService';

const Login = () => {
    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const onPressed = () => {
        const user =
        {
          email: mail,
          password: pass

        }
        if(mail == "" || pass == "" )
        {
            console.log("mal");
        }
        else if(mail == "" && pass == ""){
            console.log("mal");
        }
        else{
            LoginMail(user)
            .then(navigate("/home"))
            .catch(error => alert("mallllll grrrr aahhh yeah yeah sos horribla"));
        }
    }

    return (
        <>
            <div>
                <h1>My Form</h1>
            <View style={styles.container}>
            <StatusBar style="auto" />
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
            </View>
            </div>
        </>
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