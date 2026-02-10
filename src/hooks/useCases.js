import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCases = async () => {
  const { data } = await axios.get("https://picsum.photos/v2/list?limit=6");
  return data;
};

export const useCases = () => {
  return useQuery({
    queryKey: ["cases"],
    queryFn: fetchCases,
  });
};
