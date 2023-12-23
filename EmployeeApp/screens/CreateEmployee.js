import { StyleSheet, Text, View, Modal ,Alert,KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function CreateEmployee({navigation}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [position, setPosition] = useState("")
    const [modal, setModal] = useState(false)

    const submitData=()=>{
        fetch("http://192.168.6.153:3000/send-data",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                salary,
                picture,
                position
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            Alert.alert("Employee Added Successfully")
            navigate.navigation("Home")
        })
    }

    const pickFromGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status === 'granted') {
          let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });
      
          if(!data.canceled){
            let newfile={uri:data.uri,
            type:`test/${data.uri.split(".")[1]}`,
            name:`test.${data.uri.split(".")[1]}`
        }
        handleUpload(newfile)
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
               quality:1,
           })
           if(!data.canceled){
                let newfile={uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`  
            }
            handleUpload(newfile)
           }
        }else{
           Alert.alert("you need to give us permission to work")
        }
       }
       const handleUpload = (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'EmployeeApp'); // Corrected typo here
        data.append('cloud_name', 'dh9zxbrlw');
    
        fetch('https://api.cloudinary.com/v1_1/dh9zxbrlw/image/upload', {
            method: 'post',
            body: data,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPicture(data.url)
            setModal(false)
        })
        .catch(error => {
            console.error('Upload error:', error);
        });
    };
    

    //    const handleUpload=(image)=>{
    //     const data= new FormData()
    //     data.append('file',image)
    //     data.append('upload_preset','EmployeeApp' )
    //     data.append("cloud_name","dh9zxbrlw")

    //     fetch("https://api.cloudinary.com/v1_1/dh9zxbrlw/image/upload",{
    //         method:"post",
    //         body:data
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     }) .catch((error) => {
    //         console.error('Upload error:', error);
    //     });
    //    }

    return (
        <View style={styles.root}>
            <KeyboardAvoidingView>
            <TextInput
                label="Name"
                style={styles.inputStyle}
                value={name}
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
              <TextInput
                label="Position"
                style={styles.inputStyle}
                value={position}
                theme={theme}
                mode='outlined'
                onChangeText={text => { setPosition(text) }}
            />
            <Button  style={styles.inputStyle} 
            icon={picture==""?"upload":"check"}
            mode="contained"
            theme={theme}
            onPress={() => setModal(true)}>
             Upload Image
            </Button>

            <Button  style={styles.inputStyle} 
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => submitData()}>
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
            </KeyboardAvoidingView>
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