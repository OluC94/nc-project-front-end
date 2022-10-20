import React, { FC, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import EventCard from "./EventCard";
import { EventContext } from "../contexts";
import { event_list } from "../utils/events_api";
import spaceApi from "../utils/api";
import axios from "axios";
import { unixToDate } from "../utils/date";
import { Loading } from "./Loading";

import { useFocusEffect } from "@react-navigation/native";
import PicOfTheDay from "./PicOfTheDay";

const EventList: FC = ({ navigate }) => {
  const { setEventID } = useContext(EventContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      event_list().then((x) => {
        setData(x);
        setIsLoading(false);
      });
    }, [])
  );

  const handleEventSelection = (event_id: string) => {
    setEventID(event_id);
    navigate("View Event");
  };

  if (isLoading) return <Loading />;
  return (
    <View>
      <View style={styles.pod}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            color: "#fff",
            margin: 10,
            padding: 15,
          }}
        >
          AstronoMy
        </Text>
        <PicOfTheDay />
      </View>
      <View style={{ backgroundColor: "#5b3c73" }}>
        <Text style={styles.events}>Upcoming Events</Text>
        <View>
          {data.map((dataPoint) => {
            return (
              <View key={dataPoint._id}>
                <TouchableOpacity
                  style={{ marginHorizontal: 5 }}
                  onPress={() => handleEventSelection(dataPoint._id)}
                >
                  <EventCard
                    title={dataPoint.event_name}
                    date={unixToDate(dataPoint.time)}
                    details={dataPoint.details}
                    followers={dataPoint.interested_in.length}
                    images={dataPoint.images}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <Image
          style={styles.planet}
          source={require("../../assets/planeticonseethru.png")}
        />
      </View>
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  events: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
    padding: 10,
    paddingBottom: 0,
    color: "#fff",
  },
  planet: {
    alignSelf: "center",
    margin: 25,
    width: 35,
    height: 35,
    marginBottom: 35,
    paddingBottom: 15,
  },
});
