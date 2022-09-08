import React, { Fragment, useState } from "react";

import Select from "react-select";
const options = [
  { value: "2011-2012", label: "2011-2012" },
  { value: "2012-2013", label: "2012-2013" },
  { value: "2013-2014", label: "2013-2014" },
];
export default function Demo() {
  const [color, setColor] = useState({
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  });

  const { isClearable, isSearchable, isDisabled, isLoading, isRtl } = color;

  return (
    <Fragment>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={options}
      />
    </Fragment>
  );
}
