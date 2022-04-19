import React from "react";
import { View } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import "./index.scss";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Content = (): React.ReactElement => {
  return (
    <View className="layout">
      <View className="layoutHome">
        <Home />
      </View>
      <View className="layoutFooter">
        <Footer />
      </View>
    </View>
  );
};
export default inject("store")(observer(Content));
