import React, { FC, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EventCard from "./EventCard";
import { sampleData } from "../utils";
import { EventContext } from "../contexts";

const EventList: FC = ({ navigate }) => {
  const { data } = sampleData;
  const { setEvent } = useContext(EventContext);
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
