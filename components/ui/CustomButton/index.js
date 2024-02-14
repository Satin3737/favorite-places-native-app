import {Ionicons} from '@expo/vector-icons';
import {Pressable, Text, View} from 'react-native';
import {colors} from '../../../const';
import styles from './styles';

export const btnTypes = {
    regular: 'regular',
    flat: 'flat'
};

const CustomButton = ({
    label = '',
    iconProps = null,
    type = 'regular',
    onPress = () => {},
    buttonOuterStyles = [],
    buttonInnerStyles = [],
    buttonTextStyles = []
}) => {
    const isFlat = type === 'flat';

    return (
        <View style={[styles.buttonOuter, isFlat && styles.flatOuter, ...buttonOuterStyles]}>
            <Pressable
                style={({pressed}) => [
                    styles.buttonInner,
                    isFlat && styles.flatInner,
                    pressed && styles.pressed,
                    ...buttonInnerStyles
                ]}
                onPress={onPress}
                android_ripple={{color: colors.primary100}}
            >
                {!!iconProps && <Ionicons color={colors.primary800} size={16} {...iconProps} />}
                <Text style={[styles.text, isFlat && styles.flatText, ...buttonTextStyles]}>{label}</Text>
            </Pressable>
        </View>
    );
};

export default CustomButton;
