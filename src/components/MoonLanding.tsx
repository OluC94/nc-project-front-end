import React, { FC, ReactElement } from "react";
import { Image, Text, View } from "react-native";

const MoonLanding: FC = (): ReactElement => {
  return (
    <View>
      <Text>Moon Landing: 1969</Text>
      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri: "https://cdn.theatlantic.com/thumbor/NSEKVKBWcnLQJki2ezSNenZ03SY=/1500x1064/media/img/photo/2019/07/apollo-11-moon-landing-photos-50-ye/a01_40-5903/original.jpg",
        }}
      />
    </View>
  );
};

export default MoonLanding;
