import React, { useState, useEffect } from "react";
import { dataLoading } from "./useGetPlanets";
import axios from "axios";

const usePOTDUrl = (): dataLoading => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async (apiUrl: string) => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error: any | void) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData(
      "https://api.nasa.gov/planetary/apod?api_key=O9rCEo3SRKCMw76GVeuQhohdVj07YuYawGJDUfhF"
    );
  }, []);
  return { data, loading, error };
};

export default usePOTDUrl;
