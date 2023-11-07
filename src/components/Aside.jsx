import axios from "axios";
import React, { useEffect, useState } from "react";

const Aside = () => {
  const [trends, setTrends] = useState(null);
  const [trendsArr, setTrendsArr] = useState(null);

  useEffect(() => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("woeid", "23424969");

    const options = {
      method: "POST",
      url: "https://twitter-trends5.p.rapidapi.com/twitter/request.php",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "twitter-trends5.p.rapidapi.com",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then((res) => {
        setTrends(res.data.trends);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (trends !== null && typeof trends === "object") {
      const trendsArray = Object.values(trends);
      setTrendsArr(trendsArray);
    }
  }, [trends]);

  return (
    <div className="hidden lg:block">
      <div className="my-10 items-start max-w-[320px]">
        <h1 className="text-center font-bold text-2xl">
          Şu anda olup bitenler:
        </h1>
        <div className="h-[80vh] flex items-center justify-center bg-gray-900 m-5 rounded-md">
          {trendsArr === null ? (
            <p className="text-center">yükleniyor...</p>
          ) : (
            trendsArr.map((trend, index) => (
              <div className="text-white" key={index}>
                {trend.name}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
