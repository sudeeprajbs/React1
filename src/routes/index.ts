import { useRoutes } from "react-router-dom";
import { Jio, Topics } from "./entry";

export default function Sudi(){
    return useRoutes([Jio,Topics])
}