import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import React, { FC, ReactElement, useEffect } from "react";
import usePOTDUrl from "../hooks/usePOTDUrl";
const PicOfTheDay: FC = (): ReactElement => {
  const { data: url, loading, error } = usePOTDUrl();
  if (loading) return <Text>"loading..."</Text>;
  if (error) return <Text>"error..."</Text>;
  return (
    url && <Image style={{ width: 400, height: 400 }} source={{ uri: url }} />
  );
};

export default PicOfTheDay;
