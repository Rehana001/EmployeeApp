import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

function Home(props) {
    const data = [
        { id: 1, name: "rehana", position: "Mobile Dev" },
        { id: 2, name: "Tehmina", position: "software developer" },
        { id: 3, name: "fiza", position: "Data Scientist" },
        { id: 4, name: "Sara", position: "machine learning engineer" }

    ]

    const theme = {
        colors: {
            primary: "#2337a8"
        }
    }

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} key={item.id}
            onPress={()=>props.navigation.navigate("Profile")}
            >
                <View style={styles.Viewcard}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
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
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => `${item.id}`}
            />
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