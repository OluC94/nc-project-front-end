import { Card, Image, ListItem } from "@rneui/base";
import React, { FC, ReactElement } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  LightYearToMiles,
  massComparedToEarth,
} from "../utils/planetDataFormat";

export interface Planet {
  distance_light_year: number;
  host_star_mass: number;
  host_star_temperature: number;
  mass: number;
  name: string;
  period: number;
  radius: number;
  semi_major_axis: number;
  temperature: number;
}
export interface PlanetProps {
  planet: Planet;
}

export interface ImageReqs extends Object {
  Mercury: any;
  Venus: any;
  Mars: any;
  Jupiter: any;
  Saturn: any;
  Uranus: any;
  Neptune: any;
  Pluto: any;
}
const styleCard = {
  backgroundColor: "#2E0F38",
  borderRadius: 10,
  borderColor: "#2E0F38",
};
const box = {
  borderRadius: 10,
  padding: 10,
  margin: 1,
  flex: 1,
  backgroundColor: "#8e649c",
  borderColor: "#8e649c",
};
const planetRequires: ImageReqs = {
  Mercury: require(`../images/mercury.jpg`),
  Venus: require(`../images/venus.jpg`),
  Mars: require(`../images/mars.jpg`),
  Jupiter: require(`../images/jupiter.jpg`),
  Saturn: require(`../images/saturn.jpg`),
  Uranus: require(`../images/uranus.jpg`),
  Neptune: require(`../images/neptune.jpg`),
  Pluto: require(`../images/pluto.jpg`),
};
type PlanetKey = keyof typeof planetRequires;

const PlanetCard: FC<PlanetProps> = (props): ReactElement => {
  const { planet } = props;
  const location = planetRequires[planet.name as PlanetKey];
  return (
    <SafeAreaView>
      <ScrollView>
        <Card containerStyle={styleCard}>
          <View style={{ alignItems: "center" }}>
            <Card.Title style={{ fontSize: 25, color: "#fff" }}>
              {planet.name}
            </Card.Title>
            {location && (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  marginBottom: 15,
                }}
                source={location}
              />
            )}
          </View>
          <Card containerStyle={box}>
            <Text style={styles.text}>
              {LightYearToMiles(planet.distance_light_year)} miles away
            </Text>
            <Card.Divider style={styles.divider} />
            <Text style={styles.text}>
              {massComparedToEarth(planet.mass)} times the Earth's mass
            </Text>
            <Card.Divider style={styles.divider} />
            <Text style={styles.text2}>{planet.temperature}°C</Text>
          </Card>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanetCard;

const styles = StyleSheet.create({
  text: {
    paddingTop: 2,
    paddingBottom: 6,
    color: "#fff",
  },
  text2: {
    paddingTop: 0,
    paddingBottom: 2,
    color: "#fff",
  },
  divider: {
    padding: 3,
  },
});
