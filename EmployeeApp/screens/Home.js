import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList ,ActivityIndicator} from 'react-native';
import { Card, FAB } from 'react-native-paper';
import React,{useState,useEffect} from 'react'

function Home(props) {
    const[data,setData]=useState([])
    const[loading, setLoading]=useState(true)
    useEffect(()=>{
        fetch("http://192.168.6.153:3000/")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            setLoading(false)
        })
    },[])
    const theme = {
        colors: {
            primary: "#2337a8"
        }
    }

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} key={item._id}
            onPress={()=>props.navigation.navigate("Profile",{item})}
            >
                <View style={styles.Viewcard}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{uri:item.picture}}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>
                </View>
            </Card>

        )
    })
    return (
        <View style={{ flex: 1 }}>
            {/* {renderList} */}
            {
            loading? 
            <ActivityIndicator size="large" color="#0000ff"/>
            :
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => item._id}
            />
            }
            
            <FAB
                onPress={() => props.navigation.navigate("CreateEmployee")}
                style={styles.fab}
                small={false}
                theme={theme}
                icon="plus"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        padding: 5
    },
    Viewcard: {
        flexDirection: "row",
        padding: 6,
    },
    text: {
        fontSize: 18,
    },
    fab: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16,
        justifyContent: 'flex-end', // Push the FAB to the end of the screen
        alignItems: 'flex-end',
    }

})

export default Home;