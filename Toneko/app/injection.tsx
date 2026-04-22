import { StyleSheet, Pressable, Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export const Injection = (props: { unitInsuline: number; decreaseUnit: () => void; increaseUnit: () => void }) => {

    return (
        <View style={styles.container}>
            <Pressable onPress={props.decreaseUnit}>
                <FontAwesome6 name="square-minus" size={36} color="black" />
            </Pressable>
            <Text style={{ marginHorizontal: 10, width: 50, textAlign: "center" }}>{props.unitInsuline}</Text>
            <Pressable onPress={props.increaseUnit}>
                <FontAwesome6 name="square-plus" size={36} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    }
})