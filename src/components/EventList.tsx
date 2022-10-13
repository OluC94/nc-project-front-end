import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EventCard from "./EventCard";
import { sampleData } from "../utils";

const EventList: FC = (props) => {
  const { data } = sampleData;
  const { navigate } = props;
  return (
    <View>
      <Text>Event Cards:</Text>
      <View>
        {data.map((dataPoint) => {
          return (
            <View>
              <EventCard
                title="Meteor Shower"
                date={dataPoint[3]}
                details="Info on the meteor shower, ... "
                followers={5}
              />
              <TouchableOpacity
                style={{ marginHorizontal: 5 }}
                onPress={() => navigate("Event")}
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
