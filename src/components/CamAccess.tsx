import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CamAccess: FC = () => {
  const [image, setImage] = useState<any>(null);

  const getImagesFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{ marginHorizontal: 5 }}
        onPress={getImagesFromGallery}
      >
        <Text style={{ color: "rgba(81,135,200,1)" }}>Add your images</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CamAccess;

const styles = StyleSheet.create({
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
