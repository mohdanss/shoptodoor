import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const SecondaryButton = ({title, onPress}) => {
    return (
      <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
        <Text style={[styles.btnText, styles.btnSecondaryText]}>{title}</Text>
      </TouchableOpacity>
    );
};

export default SecondaryButton;


const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50,
        height: 48,
        justifyContent: 'center',
        width: '100%',
        shadowColor: "#181722",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        elevation: 4,
      },
      btnSecondary: {
        backgroundColor: '#A21D21',
        borderColor: '#181722',
      },
      btnText: {
        color: 'f6f6f6',
        fontWeight: 'bold',
        fontSize: 18,
      },
      btnSecondaryText: {
        color: '#f6f6f6',
      },
});

