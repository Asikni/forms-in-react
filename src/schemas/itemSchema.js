function Items({ headings, values, setFieldValue }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {headings.map((heading, index) => (
          <div
            className="parentContainer"
            key={index}
            style={{
              border: values.checks[index] ? "1px solid lightblue" : "",
              boxShadow:values.checks[index] ? "5px 2px  " : ""
            }}
          >
            {heading.heading}
            <div
              className="roundBox"
              style={{
                backgroundColor: values.checks[index] ? "red" : "", //remember values is an object
              }}
              onClick={() => {
                const updatedChecks = values.checks.map(
                  (
                    check,
                    idx //taking each element in the array as we have to change the entire array
                  ) => (idx === index ? !check : false)
                );
                setFieldValue("checks", updatedChecks);
                // console.log(values);
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
