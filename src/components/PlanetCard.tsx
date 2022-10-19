import { Card, Image, ListItem } from "@rneui/base";
import React, { FC, ReactElement } from "react";
import { Text, View } from "react-native";
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
  margin: 5,
  backgroundColor: "#aa00aa22",
  borderRadius: 5,
  padding: 5,
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
    <Card containerStyle={styleCard}>
      <View style={{ alignItems: "center" }}>
        <Card.Title>{planet.name}</Card.Title>
        {location && (
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 }}
            source={location}
          />
        )}
      </View>
      <Card.Divider />
      <View>
        <ListItem>
          <Text>
            {LightYearToMiles(planet.distance_light_year)} miles away from earth
          </Text>
        </ListItem>
        <ListItem>
          <Text>{massComparedToEarth(planet.mass)} mass of the earth</Text>
        </ListItem>
        <ListItem>
          <Text>{planet.temperature} Celcius</Text>
        </ListItem>
      </View>
    </Card>
  );
};

export default PlanetCard;
