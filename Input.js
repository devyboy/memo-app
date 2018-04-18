
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = function (props) {
    return (
        <View style={props.fuck ? styles.inputContainer2 : styles.inputContainer}>
            <Text style={props.fuck ? styles.inputLabel2 : styles.inputLabel}>{props.children}</Text>
            <TextInput
                secureTextEntry={props.password}
                autoCorrect={false}
                autoCapitalize={'none'}
                value={props.textValue}
                onChangeText={props.textChange}
                style={props.fuck ? styles.input2 : styles.input}
                placeholder={props.placeholder}
                multiline={props.multiline}
                numberOfLines={props.lines}
            />
        </View>
    );
};

const styles = {
    input: {
      color: '#000',
      alignSelf: 'center',
      paddingRight: 0,
      paddingLeft: 0,
      fontSize: 16,
      lineHeight: 23,
      flex: 2,
      textAlign: 'left'
    },
    input2: {
        color: '#000',
        alignSelf: 'center',
        paddingRight: 5,
        paddingLeft: 6,
        fontSize: 16,
        lineHeight: 23,
        flex: 8,
        textAlign: 'left'
    },
    inputLabel: {
        fontSize: 18,
        alignSelf: 'center',
        flex: 1,
        marginBottom: 8
    },
    inputLabel2: {
        fontSize: 18,
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    inputContainer2: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
};

export default Input;
