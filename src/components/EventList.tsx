import React, { FC, useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import EventCard from "./EventCard";
import { EventContext } from "../contexts";
import { event_list } from "../utils/events_api";
import spaceApi from "../utils/api";
import axios from "axios";
import { unixToDate } from "../utils/date";

const EventList: FC = ({ navigate }) => {

  const { setEventID } = useContext(EventContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    event_list().then((x) => {
      setData(x.data.events);
    });

  }, []);

  const handleEventSelection = (event_id: string) => {
    setEventID(event_id);
    navigate("View Event");
  };
  return (
    <View>
      <Text>Events:</Text>
      <View>
        {data.map((dataPoint) => {
          return (
            <View key={dataPoint._id}>
              <EventCard
                title={dataPoint.event_name}
                date={unixToDate(dataPoint.time)}
                details={dataPoint.details}
                followers={dataPoint.interested_in.length}
              />
              <TouchableOpacity
                style={{ marginHorizontal: 5 }}
                onPress={() => handleEventSelection(dataPoint._id)}
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
