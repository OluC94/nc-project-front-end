import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import React, { FC, ReactElement, useEffect } from "react";
import usePOTDUrl from "../hooks/usePOTDUrl";
import { Loading } from "./Loading";
const PicOfTheDay: FC = (): ReactElement => {
  const { data: url, loading, error } = usePOTDUrl();
  if (error) return <Text>"error..."</Text>;
  if (url !== "") {
    return (
      url && <Image style={{ width: 400, height: 400 }} source={{ uri: url }} />
    );
  } else return <Loading />;
};

export default PicOfTheDay;
