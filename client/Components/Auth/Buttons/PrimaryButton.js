import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const PrimaryButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
          <Text style={[styles.btnText, styles.btnPrimaryText]}>{title}</Text>
        </TouchableOpacity>
      );
}
export default PrimaryButton;

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 48,
        height: 48,
        justifyContent: 'center',
        width: "100%",
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,

      },
      btnPrimary: {
        backgroundColor: '#181722',
        borderColor: '#f6f6f6',
      },
      btnText: {
        color: 'f6f6f6',
        fontWeight: 'medium',
        fontSize: 18,
        fontFamily:'Poppins',
      },
      btnPrimaryText: {
        color: '#f6f6f6',
      },
});