import React from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`the weather in Pretoria is ${response.data.main.temp}`);
  }
  let apiKey = `6f727a99c6dff687686c2d48cae1c86d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
