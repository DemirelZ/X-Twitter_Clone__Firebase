import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

const Aside = () => {
  const [trends, setTrends] = useState(null);
  // const [trendsArr, setTrendsArr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set("woeid", "23424969");

      const options = {
        method: "POST",
        url: "https://twitter-trends5.p.rapidapi.com/twitter/request.php",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "5e1b5b32c4mshad5b1b1f3e1c3c4p1b95fcjsn83a801dd00aa",
          "X-RapidAPI-Host": "twitter-trends5.p.rapidapi.com",
        },
        data: encodedParams,
      };

      try {
        const res = await axios.request(options);
        setTrends(res.data.trends);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const memoizedTrendsArr = useMemo(() => {
    if (trends !== null && typeof trends === "object") {
      const trendsArray = Object.values(trends);
      return trendsArray;
    }
    return null;
  }, [trends]);

  return (
    <div className="hidden lg:block  ">
      <div className="my-10 items-start max-w-[320px] ">
        <h1 className="text-center font-bold text-2xl">
          Şu anda olup bitenler:
        </h1>

        <div className="asideScroll overflow-y-auto h-[80vh] bg-gray-900 m-5 rounded-md ">
          {memoizedTrendsArr === null ? (
            <p className="text-center">yükleniyor...</p>
          ) : (
            <div className="flex flex-col text-white p-4 leading-[2.4] cursor-pointer">
              {memoizedTrendsArr.map((trend, index) => (
                <div key={index}>{trend.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aside;
