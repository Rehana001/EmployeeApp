import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'

export default function CreateEmployee() {
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput
                label="Name"
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode='outlined'
                onChangeText={text => { setName(text) }}
            />
            <TextInput
                label="phone number"
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode='outlined'
                onChangeText={text => { setPhone(text) }}
            />
            <TextInput
                label="Email"
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode='outlined'
                onChangeText={text => { setEmail(text) }}
            />
            <TextInput
                label="Salary"
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                keyboardType="number-pad"
                mode='outlined'
                onChangeText={text => { setSalary(text) }}
            />
            <Button icon="upload" mode="contained" onPress={() => setModal(true)}>
                Press me
            </Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                <View style={styles.ModalButtonView}>
                    <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                        cancel
                    </Button>
                    <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
                        cancel
                    </Button>
                </View>
                <View>
                    <Button icon="camera"  onPress={() => setModal(false)}>
                        cancel
                    </Button>
                </View>
                </View>
            </Modal>
        </View>
    )
}
const theme = {
    colors: {
        primary: "#3014a3"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    },
    ModalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:'100%',
        backgroundColor:"#e3f6fa"
    }
})