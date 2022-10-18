import React, { FC, ReactElement, ReactPropTypes } from "react";
import { Text, View } from "react-native";
import { useGetPlanets } from "../hooks/useGetPlanets";
import PlanetCard, { Planet } from "./PlanetCard";

const Planets: FC = (): ReactElement => {
  const { data, loading, error } = useGetPlanets();
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>404: Comments not found</Text>;
  return (
    <View>
      {data &&
        data.map((planet) => {
          if (planet.name !== "Earth") {
            return <PlanetCard planet={planet} />;
          }
        })}
    </View>
  );
};

export default Planets;
