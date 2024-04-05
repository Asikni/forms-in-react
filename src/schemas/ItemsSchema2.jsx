function Items2({ headings, values, setFieldValue, value }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {headings.map((heading, index) => (
          <div
            className="parentContainer"
            key={index}
            style={{
              // border: values.checks[index] ? "1px solid lightblue" : "",
              // boxShadow: values.checks[index] ? "5px 2px  " : "",
              border: value === heading.subHeading ? "1px solid lightblue" : "",
              boxShadow: value === heading.subHeading ? "5px 2px  " : "",
            }}
          >
            {heading.heading}
            {heading.subHeading}
            <div
              className="roundBox"
              style={{
                // backgroundColor: values.checks[index] ? "red" : "", //remember values is an object
                backgroundColor: value === heading.subHeading ? "red" : "",
              }}
              onClick={() => {
                setFieldValue("selection", heading.subHeading);
                return;
                // const updatedChecks = headings.map((_, idx) => {
                //   if (idx === index) {
                //     //select one reject others
                //     return true;
                //   } else {
                //     return false;
                //   }
                // });

                // setFieldValue("checks", updatedChecks);
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items2;
