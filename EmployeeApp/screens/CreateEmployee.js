import { StyleSheet, Text, View, Modal ,Alert} from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function CreateEmployee() {
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)


    const pickFromGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status === 'granted') {
          let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
          });
      
          if (!data.cancelled) {
            setPicture(data.uri);
          }
        } else {
          Alert.alert('Permission not granted', 'You need to give us permission to access the gallery.');
        }
      
        setModal(false);
      };
    const pickFromCamera= async ()=>{
        const{granted} =  await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
         let data=  await ImagePicker.launchCameraAsync({
               mediaTypes:ImagePicker.MediaTypeOptions.Images,
               allowsEditing:true,
               aspect:[1,1],
               quality:0.5,
           })
           console.log(data)
        }else{
           Alert.alert("you need to give us permission to work")
        }
       }

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
            <Button  style={styles.inputStyle} 
            icon="upload"
            mode="contained"
            theme={theme}
            onPress={() => setModal(true)}>
             Upload Image
            </Button>

            <Button  style={styles.inputStyle} 
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => console.log("saved")}>
             Save
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
                    <Button 
                    icon="camera"
                     mode="contained" 
                     theme={theme}
                     onPress={() => pickFromCamera()}>
                        camera
                    </Button>
                    <Button
                     icon="image-area" 
                     mode="contained" 
                     theme={theme}
                     onPress={() => pickFromGallery()}>
                        gallery
                    </Button>
                </View>
                <View>
                    <Button 
                    icon="camera"  
                    theme={theme}
                    onPress={() => setModal(false)}>
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
        primary: "#2337a8"
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
        backgroundColor:"white"
    }
})