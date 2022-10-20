import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import React, { FC, ReactElement, useEffect } from "react";
import { View } from "react-native";
import usePOTDUrl from "../hooks/usePOTDUrl";
import { Loading } from "./Loading";
const PicOfTheDay: FC = (): ReactElement => {
  const { data, loading, error } = usePOTDUrl();
  if (loading) return <Loading />;
  if (error) return <Text>"error..."</Text>;
  return (
    data.url && (
      <View style={{ backgroundColor: "#8351a8" }}>
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 1,
          }}
          source={{ uri: data.url }}
        />

        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            marginTop: 10,
            paddingTop: 15,
          }}
        >
          NASA's Picture of The Day{" "}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "400",
            fontStyle: "italic",
            color: "#fff",
            marginBottom: 10,
            paddingBottom: 15,
          }}
        >
          {data.title}
        </Text>
      </View>
    )
  );
};

export default PicOfTheDay;
