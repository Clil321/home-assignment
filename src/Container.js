import React from "react";
import BreedButton from "./BreedsButton";
import DogPhotos from "./DogPhotos";

function Container() {
  return (
    <div className="mw-100 d-inline-block container border-dark block-example border d-flex flex-column bd-highlight mb-3">
      <BreedButton />
      <DogPhotos />
    </div>
  );
}
export default Container;
