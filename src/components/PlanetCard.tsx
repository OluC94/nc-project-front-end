import React, { FC, ReactElement } from "react";
import { Text, View } from "react-native";
import { LightYearToMiles } from "../utils/planetDataFormat";
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
const styleCard = {
  margin: 5,
  backgroundColor: "#aa00aa22",
  borderRadius: 5,
  padding: 5,
};

const PlanetCard: FC<PlanetProps> = (props): ReactElement => {
  const { planet } = props;
  return (
    <View style={styleCard}>
      <Text style={{ fontSize: 20 }}>{planet.name}</Text>
      <Text>
        1 year on {planet.name} is {planet.period} Earth days
      </Text>
      <Text>
        {planet.name} is {LightYearToMiles(planet.distance_light_year)} miles
        from Earth.
      </Text>
    </View>
  );
};

export default PlanetCard;
