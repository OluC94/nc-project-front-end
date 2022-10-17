import React, {
FC,
useEffect,
useState
} from "react";
import {
Text,
View,
StyleSheet,
SafeAreaView,
TouchableOpacity,
Alert,
AsyncStorage,
} from "react-native";
import {
Button,
Input
} from "../components";
import spaceApi from "../utils/api";
import {
event_post
} from "../utils/events_api";
import * as ImagePicker from "expo-image-picker"

const EventAdder: FC = (props) => {
const [eventName, setEventName] = useState < string | null> (null);
  const [eventDetails, setEventDetails] = useState < string | null> (null);
    const [eventDate, setEventDate] = useState < string | null> (null);
      const [image, setImage] = useState < any> (null);

        const handleSubmit = async () => {
        if (eventName && eventDetails && eventDate) {
        event_post({
        eventName: eventName,
        eventDetails: eventDetails,
        eventDate: eventDate,
        image: image,
        }).then(async (result) => {
        if (result.stats === 200) {
        return console.log('post successful!')
        }
        })
        } else {
        Alert.alert("Error, missing fields");
        };
        };



        const getImagesFromGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        if (!result.cancelled) {
        setImage(result.uri);
        }
        };

        return (
        <SafeAreaView style={ styles.container }>
          <Text> Add event screen, </Text> < Input placeholder="Event Name Here.." onChangeText={ (text)=>
              setEventName(text)
              }
              /> < Input placeholder="Details Here.." onChangeText={ (text)=> setEventDetails(text)
                }
                /> < Input placeholder="Date Of Event Here.." onChangeText={ (text)=> setEventDate(text)
                  }
                  /> < TouchableOpacity style={ { marginHorizontal: 5 } } onPress={ getImagesFromGallery }>
                    < Text style={ { color: "rgba(81,135,200,1)" } }> upload Images
                      </Text> </TouchableOpacity> < Button title="Submit" onPress={ handleSubmit }/>
                      </SafeAreaView> ); } 
                      
  export default EventAdder; 
                      
                      
  const styles=StyleSheet.create({ 
    container: {
      flex: 1, backgroundColor: "#fff" , alignItems: "center" , justifyContent: "center" , },
      eventText: { flexDirection: "row" , marginVertical: 20, 
    }, 
  });