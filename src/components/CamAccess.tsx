import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
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
        style={styles.addImageButton}
        onPress={getImagesFromGallery}
      >
        <Text
          style={{ alignSelf: "center", textAlign: "center", color: "#fff" }}
        >
          <Image
            style={styles.camera}
            source={require("../../assets/cameraicon.png")}
          />
          {"   "}
          Add an image
        </Text>
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
  camera: {
    flexDirection: "row",
    width: 12,
    height: undefined,
    aspectRatio: 1,
  },
  addImageButton: {
    backgroundColor: "#1a2c54",
    marginRight: 125,
    marginLeft: 125,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
});
