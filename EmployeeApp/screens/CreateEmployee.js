import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Modal} from 'react-native';
import { Card ,FAB, TextInput, Button} from 'react-native-paper';
import React,{useState} from 'react';

const CreateEmployee=()=>{
    const [Name,setName]=useState("");
    const [Phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [salary,setSalary]=useState("");
    const [picture,setPicture]=useState("");
    const [modal, setModal]=useState(false);
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.inputStyle}
            label="Name"
            value={Name}
            theme={theme}
            mode="outlined"
            onChangeText={text=>setName({text})}
            />

            <TextInput
            style={styles.inputStyle}
            label="Email"
            value={email}
            theme={theme}
            mode="outlined"
            onChangeText={text=>setEmail({text})}
            />

            <TextInput
            style={styles.inputStyle}
            label="Phone"
            value={Phone}
            theme={theme}
            keyboardType='number-pad'
            mode="outlined"
            onChangeText={text=>setPhone({text})}
            />

            <TextInput
            style={styles.inputStyle}
            label="salary"
            value={salary}
            theme={theme}
            keyboardType='number-pad'
            mode="outlined"
            onChangeText={text=>setSalary({text})}
            />
            <Button icon={"upload"}
             style={styles.inputStyle} 
             mode='contained'
            onPress={()=>setModal(true)}>
                Upload Image
            </Button>

            <Button icon={"content-save"}
             style={styles.inputStyle} 
             mode='contained'
            onPress={()=>setModal(true)}>
                save
            </Button>
            <Modal
            animationType='slide'
            transparent={true}
            visible={modal}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                    <Button 
                    icon={"camera"} 
                    mode='contained' 
                    onPress={()=>console.log("pressed")}>
                    Camera
                    </Button>

                    <Button 
                    icon={"image-area"} 
                    mode='contained' 
                    onPress={()=>console.log("pressed")}>
                    Gallery
                    </Button>

                    </View>
                <Button  onPress={()=>setModal(false)}>
                    cancel
                    </Button>
                </View>

            </Modal>
        </View>
    )
}

const theme={
    colors:{
        primary:'purple',
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    inputStyle:{
        margin:5,
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10,
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white",
    }

})
export default CreateEmployee;  