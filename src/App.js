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

import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>

        <h3
          onClick={() => setView("checkbox")}
          style={{ color: view === "checkbox" ? "#fff" : "" }}
        >
          Checkbox
        </h3>
        <h3
          onClick={() => setView("searchfilter")}
          style={{ color: view === "searchfilter" ? "#fff" : "" }}
        >
          Search Filter
        </h3>
        <h3
          onClick={() => setView("searchfilter2")}
          style={{ color: view === "searchfilter2" ? "#fff" : "" }}
        >
          Search filter 2
        </h3>
        <h3
          onClick={() => setView("checkbox-formik")}
          style={{ color: view === "checkbox-formik" ? "#fff" : "" }}
        >
          Checkbox-formik
        </h3>
        <h3
          onClick={() => setView("checkbox-formik2")}
          style={{ color: view === "checkbox-formik2" ? "#fff" : "" }}
        >
          Checkbox-formik2
        </h3>

        <h3
          onClick={() => setView("Slider")}
          style={{ color: view === "Slider" ? "#fff" : "" }}
        >
          Slider
        </h3>
        <h3
          onClick={() => setView("Slider2")}
          style={{ color: view === "Slider2" ? "#fff" : "" }}
        >
          Slider2
        </h3>
        <h3
          onClick={() => setView("Upload-Image")}
          style={{ color: view === "Upload-Image" ? "#fff" : "" }}
        >
          Upload Image
        </h3>
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
      ) :  view === "Slider2" ?(
        <Slider2 />
      ) : <UploadImage/>}
    </div>
  );
}

export default App;
