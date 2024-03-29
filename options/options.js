const styles = StyleSheet.create({
  heading: {
    height: 60,
    backgroundColor: "#333333",
    padding: 20,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    fontSize: 28,
    color: "#ffffff",
    width: "100%"
  },
  icon: {
    width: 18,
    height: 16
  },
  touchableopacity: {
    padding: 5
  },
  scrollview: {
    flex: 1,
    padding: 20
  },
  header: {
    color: "#fff",
    fontSize: 16
  },
  photoBtn: {
    position: "absolute",
    right: 15,
    bottom: 40,
    color: "#fff",
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  photoBtnTxt: {
    color: "#fff"
  },
  card: {
    padding: 10
  },
  author: {
    fontSize: 18,
    color: "#f2f2f2"
  },
  image: {
    height: 250,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "lightslategray"
  },
  body: {
    padding: 10,
    fontSize: 16
  }
});
import { StyleSheet } from "react-native";
export const globalOptions = {
  "name": "HOLAAA",
  "url": "https://test202302033-dev-61079.botics.co",
  "api": "https://test202302033-dev-61079.botics.co/api/v1"
};
export const modulesOptions = {
  "@modules/app-menu": {
    "title": "AppMenuEdita",
    "copy": "Routes available",
    "styles": styles
  },
  "@modules/camera": {
    "buttonText": "+ Takeee",
    "styles": styles
  }
};