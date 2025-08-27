import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles";

type ButtonComponentProps = {
    text : string,
    style? : object,
    hoverStyle? : object,
    pressFunction? : () => void;
}

export default function ButtonComponent ( { text, style, hoverStyle, pressFunction } : ButtonComponentProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                globalStyles.button,
                pressed && globalStyles.buttonPressed,
                
                style ? style : {},
                pressed && hoverStyle ? hoverStyle : {}
            ]}
            onPress={pressFunction}
        >
            <Text style={globalStyles.minecraftText}>{text}</Text>
        </Pressable>
    )
}