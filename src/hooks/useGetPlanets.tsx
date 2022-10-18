import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "coCbNcv0MDg4/Ryh2qCQVQ==rKtVP565DnPJwebF";

interface dataLoading {
  data: Array<any>;
  loading: boolean;
  error: Error | void;
}

export const useGetPlanets = (): dataLoading => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async (apiUrl: string) => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl, {
          headers: { "X-Api-Key": API_KEY },
        });
        setData(response.data);
      } catch (error: any | void) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData("https://api.api-ninjas.com/v1/planets?max_distance_light_year=1");
  }, []);
  return { data, loading, error };
};
