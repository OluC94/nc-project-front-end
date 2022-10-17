import React, { FC, useContext, useEffect, useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import EventCard from "./EventCard";
import { EventContext } from "../contexts";
import { event_list } from "../utils/events_api";
import spaceApi from "../utils/api";
import axios from "axios";




const EventList: FC = ({ navigate }) => {
   const { setEvent } = useContext(EventContext);
  const [data, setData] = useState([])

  useEffect(() => {
    event_list().then(x => {
      console.log('event_list', x);
      setData(x.data.events)
    })
  }, []);
  

  const handleEventSelection = (event_id: string) => {
    setEvent(event_id);
    navigate("Event");
  };

  return (
    <View>
      <Text>Event Cards:</Text>
      <View>
        {data.map((dataPoint) => {
          return (
            <View key={dataPoint[2]}>
              <EventCard
                title="Meteor Shower"
                date={dataPoint[3]}
                details="Info on the meteor shower, ... "
                followers={5}
              />
              <TouchableOpacity
                style={{ marginHorizontal: 5 }}
                onPress={() => handleEventSelection(dataPoint[2])}
              >
                <Text style={{ color: "rgba(81,135,200,1)" }}>More Info</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default EventList;
