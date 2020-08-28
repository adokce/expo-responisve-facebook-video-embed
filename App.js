import React from "react";

import { ScrollView, Text } from "react-native";

import AutoHeightWebView from "react-native-autoheight-webview";

const App = () => {
  return (
    <ScrollView
      style={{
        paddingTop: 45,
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AutoHeightWebView
        customStyle={`
            .facebook-responsive {
              overflow:hidden;
              padding-bottom:56.25%;
              position:relative;
              height:0;
          }
          .facebook-responsive iframe {
              left:0;
              top:0;
              height:100%;
              width:100%;
              position:absolute;
          }
        `}
        source={{ html: facebook }}
      />
      <Text style={{ padding: 5 }}>test</Text>
    </ScrollView>
  );
};

export default App;

// wrappati iframe u div sa klasom facebook-responsive
// u customStyle je css sredjen da bude full width
const facebook = `<div class="facebook-responsive"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMusicTraveler%2Fposts%2F2732799830377501&show_text=true&width=552&height=419&appId" width="552" height="419" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe><div>`;
