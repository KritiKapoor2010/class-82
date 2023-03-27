import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
         <View style={styles.cardContainer}>
<Image source = {require("../assets/story_image_1.png")} style={styles.storyImage}> 
  

</Image>
<View style={styles.titleContainer}>
<Text style={styles.storyTitleText}>
{this.props.story.title}
</Text>
<Text style={styles.storyAuthorText}>
{this.props.story.story.author}
</Text>
<Text style={styles.descriptionText}>
{this.props.story.description}

</Text>
</View>
         </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: { margin: RFValue(13), backgroundColor: "#2f345d", 
  borderRadius: RFValue(20) }, 
  storyImage: { resizeMode: "contain", width: "95%", alignSelf: "center", height: RFValue(250) }, 
  titleContainer: { paddingLeft: RFValue(20), justifyContent: "center" },
   storyTitleText: { fontSize: RFValue(25), fontFamily: "Bubblegum-Sans", color: "white" },

   storyAuthorText: { fontSize: RFValue(18), fontFamily: "Bubblegum-Sans", color: "white" },
    descriptionText: { fontFamily: "Bubblegum-Sans", fontSize: 13, color: "white",
     paddingTop: RFValue(10) }, actionContainer: { justifyContent: "center", alignItems: "center", padding: RFValue(10) }, likeButton: { width: RFValue(160), height: RFValue(40), justifyContent: "center", alignItems: "center", flexDirection: "row", backgroundColor: "#eb3948", borderRadius: RFValue(30) }, likeText: { color: "white", fontFamily: "Bubblegum-Sans", fontSize: RFValue(25),
    marginLeft: RFValue(5) } });
  
