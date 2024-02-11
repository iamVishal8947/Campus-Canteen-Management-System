import React from "react";
import SearchBoxAndAddButton from "../../components/common/SearchBoxAndAddButton";

export default function CustomerList() {
  return (
    <div>
      <SearchBoxAndAddButton criteria = "prn" object = 'customer'></SearchBoxAndAddButton>
    </div>
  );
}
