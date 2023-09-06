import { useEffect, useState } from 'react'; 
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import  StatusBar  from 'expo-status-bar';
  import  LoginMail  from '../services/ApiService';
  import  {useNavigate}  from 'react-router-dom';

const Login = () => {
    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const navigate = useNavigate();

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
            LoginMail(user)
            .then(response => navigate("/home"))
            .catch(error => alert("mallllll grrrr aahhh yeah yeah sos horribla"));
        }
    }

    return (
            <View style={styles.container}>
             <Text> HOLAAAA</Text>
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