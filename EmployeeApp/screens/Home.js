import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Card } from 'react-native-paper';

function Home(){
    return (
        <Card style={styles.mycard}>
            <View style={styles.Viewcard}>
            <Image
            style={{width:60,height:60, borderRadius:30}}
            source={{uri:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
            />
            <Text>Hello from home</Text>
            </View>
        </Card>
        
    )
}

const styles= StyleSheet.create({
    mycard:{ 
        margin:20,
        marginTop:50,
        padding:5
    },
    Viewcard:{
        flexDirection:"row",
    }
})

export default Home;