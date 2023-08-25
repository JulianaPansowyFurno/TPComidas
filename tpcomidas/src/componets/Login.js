import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getMoviesById } from '../../services/omdbService';
import { ListChildStyle } from './styles';

const Login = ({ item, pressed, setPressed, index }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => { setMovie(null) }, [pressed])

    const onViewPressed = () => {
        setLoading(true);
        getMoviesById(item.imdbID).then(response => {
            setLoading(false);
            setMovie(response);
            console.log(response);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
        setPressed(index === pressed ? null : index)
    }
    return (
        <>
        <View style={styles.SectionStyle}>
            <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                    setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
            />
            </View>
            <View style={styles.SectionStyle}>
                <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                    setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
            />
            </View>
            </>
    );
};

export default ListChild;