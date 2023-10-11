import { StyleSheet, StatusBar } from 'react-native';


export const ListComponentStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0000ff",
        marginTop: StatusBar.currentHeight || 0,
    },
    background: {
        backgroundColor: "#008F7A",
        height: "100vh",
        alignItems: "center",
        textAlign: "center",
    },
    card: {
        marginBottom: 20,
        

    }
});


export const ListChildStyle = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        marginLeft: 16,
        
    },
    tinyLogo: {
        width: 150,
        height: 150,
    }
});

export const LoginStyles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        marginBottom: 40,
      },
      inputView: {
        marginTop: "2rem", 
        backgroundColor: "#2C73D2",
        borderRadius: 30,
        width: "50%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        marginLeft: '23%',
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
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%',
        marginTop: 40,
        backgroundColor: "#2C73D2",
      }
});


export const BuscadorStyle = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  scroll:
  {
    overflow: "scroll",
  },
  inputView: {
    marginTop: "5rem", 
    backgroundColor: "#2C73D2",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: "#2C73D2",
  },
  MenuBTN: {
    width: "60%",
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: "#008E9B",
  }
});


export const DetallePlatoStyle = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
},
title: {
    fontSize: 20,
    alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '40%',
  height: 50,
  flex: 1,
  padding: 10,
},
tinyLogo: {
    width: 200,
    height: 200,
    marginTop: "3rem",
    alignItems: 'center',
  justifyContent: 'center',
},
item: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},
image: {
  marginBottom: 40,
},
inputView: {
  marginTop: "2rem", 
  backgroundColor: "#2C73D2",
  borderRadius: 30,
  width: "50%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
  marginLeft: '23%',
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
  width: "60%",
  borderRadius: 25,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '15%',
  marginTop: 40,
  backgroundColor: "#2C73D2",
}
});

export const PlatoStyle = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
title: {
    fontSize: 20,
    alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '40%',
  height: 50,
  flex: 1,
  padding: 10,
},
tinyLogo: {
    width: 120,
    height: 120,
    marginTop: "3rem",
  marginLeft: '40%',
  borderRadius: 30,
},
item: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},
image: {
  marginBottom: 40,
},
inputView: {
  marginTop: "2rem", 
  backgroundColor: "#2C73D2",
  borderRadius: 30,
  width: "50%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
  marginLeft: '23%',
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
  width: "60%",
  borderRadius: 25,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '15%',
  marginTop: 40,
  backgroundColor: "#2C73D2",
},
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  
},
image: {
  marginBottom: 40,
},
loginBtn: {
  width: "55%",
  borderRadius: 20,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
  backgroundColor: "#D0E7D2",
  marginLeft: '50%',
},
});

