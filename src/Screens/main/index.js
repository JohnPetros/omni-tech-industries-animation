import { useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import Button from '../../components/Button/index';

import styles from './styles';

export default function Main() {
  const [fadeData, setFadeData] = useState(1);

  let rotation = new Animated.Value(0);
  let scale = new Animated.Value(1);
  let translateX = new Animated.Value(0);
  let skewX = new Animated.Value(0);
  let fadeIn = new Animated.Value(1);
  let fadeOut = new Animated.Value(0);

  const scaleData = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.5],
  });

  const translateData = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 35],
  });

  const rotationData = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const skewData = skewX.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '35deg'],
  });

  const fadeInData = fadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const fadeOutData = fadeOut.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const runFadeIn = () => {
    fadeIn.setValue(0),
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
  };

  const runFadeOut = () => {
    fadeOut.setValue(0),
      Animated.timing(fadeOut, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
  };

  const runSkewX = () => {
    skewX.setValue(0),
      Animated.sequence([
        Animated.timing(skewX, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(skewX, {
          toValue: -1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(skewX, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
  };

  const runTranslateX = () => {
    translateX.setValue(0),
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: -1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start();
  };

  //  Animated.sequence([
  //   Animated.timing(animaWidth, { toValue: 420, duration: 2000 }),
  //   Animated.timing(animaHeight, { toValue: 500, duration: 1000 }),
  // ]).start();

  // const runTranslateX = () => {
  //   translateX.setValue(0),
  //     Animated.timing(translateX, {
  //       toValue: 1,
  //       duration: 3000,
  //       easing: Easing.linear,
  //       useNativeDriver: false,
  //     }).start();
  // };

  const runScale = () => {
    scale.setValue(0),
      Animated.timing(scale, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
  };

  const runRotation = () => {
    rotation.setValue(0),
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
  };

  function handleButton(action) {
    setFadeData(1);
    switch (action) {
      case 'rotacionar':
        runRotation();
        break;
      case 'escala':
        runScale();
        break;
      case 'translado':
        runTranslateX();
        break;
      case 'cisalhamento':
        runSkewX();
        break;
      case 'fadeIn':
        runFadeIn();
        setFadeData(fadeInData);
        break;
      case 'fadeOut':
        setFadeData(fadeOutData);
        runFadeOut();
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Animated.Image
          source={require('../../assets/logo-company_.png')}
          style={[
            styles.image,
            {
              transform: [
                { rotate: rotationData },
                { scale: scaleData },
                { translateX: translateData },
                { skewX: skewData },
              ],
              opacity: fadeData,
            },
          ]}
        />
        <Text style={styles.text}>Omni Tech Industries</Text>
      </View>

      <View style={styles.form}>
        <Button name="Rotacionar" onPress={() => handleButton('rotacionar')} />
        <Button name="Escala" onPress={() => handleButton('escala')} />
        <Button name="Translado" onPress={() => handleButton('translado')} />
        <Button
          name="Cisalhamento"
          onPress={() => handleButton('cisalhamento')}
        />
        <Button name="FadeIn" onPress={() => handleButton('fadeIn')} />
        <Button name="FadeOut" onPress={() => handleButton('fadeOut')} />
      </View>
    </View>
  );
}
