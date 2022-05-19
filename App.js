import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function App() {
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring("0%"),
        },
      ],
    };
  });

  return <Animated.View style={style} />;
}
