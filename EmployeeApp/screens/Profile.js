import { StyleSheet, Text, View, Image, Linking,Platform } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const theme = {
    colors: {
        primary: "#2337a8"
    }
}

const Profile = (props) => {

    const {id,name,picture, phone,salary,email,position} =props.route.params.item

    const OpenDial=()=>{
        if(Platform.OS==="android"){
            Linking.openURL("tel:123456")
        }else{
            Linking.openURL("telprompt:12345")
        }
    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: picture }}
                />
            </View>
            <View style={{ alignItems: "center", margin: 16 }}>
                <Title style={{ fontWeight: "500", fontSize: 25 }}>{name}</Title>
                <Text style={{ fontSize: 15 }}>{position}</Text>
            </View>
            <Card style={styles.mycard}>
                <View style={styles.cardContent} onPress={()=>{
                    Linking.openURL("mailto:abc@xyz.com")
                }}>
                    <MaterialIcons name="email" size={29} color="#2337a8" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={()=>OpenDial()}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={29} color="#2337a8" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={29} color="#2337a8" />
                    <Text style={styles.mytext}>{salary}</Text>
                </View>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 20 }}>
                <Button style={styles.inputStyle}
                    icon="account-edit"
                    mode="contained"
                    theme={theme}
                    onPress={() => console.log("saved")}>
                    Edit
                </Button>
                <Button style={styles.inputStyle}
                    icon="delete"
                    mode="contained"
                    theme={theme}
                    onPress={() => console.log("saved")}>
                    Fire Employee
                </Button>
            </View>

        </View>
    )
}


export default Profile

const styles = StyleSheet.create({
    root: {
        flex: 1,

    },
    mycard: {
        margin: 3,
    },
    cardContent: {
        flexDirection: "row",
        padding: 8
    },
    mytext: {
        fontSize: 16,
        marginTop: 3,
        marginLeft: 5
    }
})