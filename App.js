import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Button } from 'react-native';
import React, { useState } from "react";
import "video-react/dist/video-react.css"; // import css
import "./App.css"
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View>
      <Player playsInline fluid={false} >
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />

      <ControlBar autoHide={true} disableCompletely={true}>
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
      </View>
      
      <Text style={styles.titel}>Here is the subtitle!</Text>
      <StatusBar style="auto" />
      <View style={styles.subContainer}>
        <View style={styles.level}>
          <Text>Level: X</Text>
        </View>
      <View style = {styles.toggle}>
      <Text style={{marginEnd:5}}>Select:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={styles.next}>
      <Button
        title="Next"
        //onPress={() => Alert.alert('Next Button pressed')}
      />
      </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: "space-evenly",
    alignItems: "stretch",
    width:'25vw'
  },
  player:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:'50vw',

  },
  titel: {
    marginVertical: 10,
  },
  level:{
    width: '100%',
  },
  toggle:{
    flexDirection: "row",
    width: '100%',
  },
  next:{
    height:100,
    width: '100%',
  },
});
