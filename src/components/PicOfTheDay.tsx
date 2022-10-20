import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import React, { FC, ReactElement, useEffect } from "react";
import { View } from "react-native";
import usePOTDUrl from "../hooks/usePOTDUrl";
import { Loading } from "./Loading";
const PicOfTheDay: FC = (): ReactElement => {
  const { data, loading, error } = usePOTDUrl();
  if (loading) return <Text>"loading..."</Text>;
  if (error) return <Text>"error..."</Text>;
  return (
    data.url && (
      <View>
        <Image style={{ width: 400, height: 400 }} source={{ uri: data.url }} />
        <Text>{data.title}</Text>
      </View>
    )
  );
};

export default PicOfTheDay;
