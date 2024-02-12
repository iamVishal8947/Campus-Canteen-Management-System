import React from "react";
import SearchBoxAndAddButton from "../../components/common/SearchBoxAndAddButton";

export default function CustomerHandler() {
  return (
    <div>
      <SearchBoxAndAddButton criteria = "prn" object = 'customer'></SearchBoxAndAddButton>
    </div>
  );
}
