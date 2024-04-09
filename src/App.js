import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import Checkbox from "./components/checkBoxForm";

import TagSelector from "./components/searchFilter";
import TagSelector2 from "./components/searchFilter2";

import CheckBoxFormik from "./components/checkboxFormik";
import CheckBoxFormik2 from "./components/checkboxFormik2";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";
import UploadImage from "./components/uploadImage";
import View from "./components/viewComponent";
import UploadImageFormik from "./components/UploadImageFormik";
import ThemeUsingProps from "./components/ThemeUsingProps";
import ThemeUsingContext from "./components/ThemeUsingConText";
import CommentSection from "./components/CommentSection";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <View
          onclick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic Form
        </View>
        <View
          onclick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced Form
        </View>

        <View
          onclick={() => setView("searchfilter")}
          style={{ color: view === "searchfilter" ? "#fff" : "" }}
        >
          Search Filter
        </View>
        <View
          onclick={() => setView("searchfilter2")}
          style={{ color: view === "searchfilter2" ? "#fff" : "" }}
        >
          Search Filter 2
        </View>
        <View
          onclick={() => setView("checkbox")}
          style={{ color: view === "checkbox" ? "#fff" : "" }}
        >
          Checkbox Basic
        </View>
        <View
          onclick={() => setView("checkbox-formik")}
          style={{ color: view === "checkbox-formik" ? "#fff" : "" }}
        >
          Checkbox-Formik
        </View>
        <View
          onclick={() => setView("checkbox-formik2")}
          style={{ color: view === "checkbox-formik2" ? "#fff" : "" }}
        >
          Checkbox-Formik 2
        </View>
        <View
          onclick={() => setView("Slider")}
          style={{ color: view === "Slider" ? "#fff" : "" }}
        >
          Slider Responsive
        </View>
        <View
          onclick={() => setView("Slider2")}
          style={{ color: view === "Slider2" ? "#fff" : "" }}
        >
          Slider only mobile
        </View>
        <View
          onclick={() => setView("Upload-Image")}
          style={{ color: view === "Upload-Image" ? "#fff" : "" }}
        >
          Image Uploader
        </View>
        <View
          onclick={() => setView("Upload-Image2")}
          style={{ color: view === "Upload-Image2" ? "#fff" : "" }}
        >
          Image Uploader Formik
        </View>
        <View
          onclick={() => setView("themeswitchprops")}
          style={{ color: view === "themeswitchprops" ? "#fff" : "" }}
        >
          Theme Switch Using Props
        </View>
        <View
          onclick={() => setView("themeswitchcontext")}
          style={{ color: view === "themeswitchcontext" ? "#fff" : "" }}
        >
          Theme Swich Using context
        </View>
        <View
          onclick={() => setView("commentSection")}
          style={{ color: view === "commentSection" ? "#fff" : "" }}
        >
          Comments Section
        </View>
      </nav>
      {view === "basic" ? (
        <BasicForm />
      ) : view === "advanced" ? (
        <AdvancedForm />
      ) : view === "checkbox" ? (
        <Checkbox />
      ) : view === "searchfilter" ? (
        <TagSelector />
      ) : view === "searchfilter2" ? (
        <TagSelector2 />
      ) : view === "checkbox-formik" ? (
        <CheckBoxFormik />
      ) : view === "checkbox-formik2" ? (
        <CheckBoxFormik2 />
      ) : view === "Slider" ? (
        <Slider />
      ) : view === "Slider2" ? (
        <Slider2 />
      ) : view === "Upload-Image" ? (
        <UploadImage />
      ) : view === "Upload-Image2" ? (
        <UploadImageFormik />
      ) : view === "themeswitchprops" ? (
        <ThemeUsingProps />
      )  : view === "themeswitchcontext" ? (
        <ThemeUsingContext />
      ) : <CommentSection />}
    </div>
  );
}

export default App;
