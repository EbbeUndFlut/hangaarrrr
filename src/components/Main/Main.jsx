import s from "./main.module.css";
import {useEffect, useState} from "react";
import {v4 as uuidV4} from "uuid";

const Main = () => {
    const [flugzeuge, setFlugzeuge] = useState(null);

    useEffect(() => {
        const getAllFlugzeuge = async () => {
            console.log("getting the flugzeuge...");
            const response = await fetch("http://localhost:9090/planes");
            const data = await response.json();
            console.log("data", data);
            setFlugzeuge(data);
        }
        getAllFlugzeuge();
    }, [])



    return(
        <div className={s.mainContainer}>
            <div className={s.main}>
                <h1>FlugzegList</h1>
                <div  className={s.flugzeugeContainer}>
                    {flugzeuge && flugzeuge.map((flugzeug) => {
                      return(
                          <div key={uuidV4()}></div>
                      )
                    })}
                </div>
            </div>
        </div>
    )
}


export default Main;