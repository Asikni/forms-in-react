import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import Checkbox from "./components/checkBoxForm";

import TagSelector from "./components/searchFilter";
import TagSelector2 from "./components/searchFilter2";

import CheckBoxFormik from "./components/checkboxFormik";
import Slider from "./components/slider";
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
          onClick={() => setView("Slider")}
          style={{ color: view === "Slider" ? "#fff" : "" }}
        >
          Slider
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
      ) : view === "checkbox-formik" ?(
        <CheckBoxFormik />
      ): <Slider/>}
    </div>
  );
}

export default App;
