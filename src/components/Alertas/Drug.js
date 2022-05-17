import React, { useEffect, useState } from "react";
import Drugs from "./Drugs";


const Drug = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        //console.log("useEffect")
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(
            "https://proyecto-marlene.herokuapp.com/v1/drugs/",
            );
        const drugs = await data.json();
        console.log(drugs);
        setAlerts(drugs);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {alerts.map(({ id, name, dosage_form, alert_reason, use, image, note}) => (
                    <div className="col-md-3" key={id}>
                        <Drugs imageSource={image} name={name} dosage_form={dosage_form} alert_reason={alert_reason} use = {use} note = {note}/>
                    </div>
                ))}
            </div>
        </div>
    );
    }

    {/*             <ul>
                {
                alerts.map(item => (
                    <li key={item.id}>  
                        {item.name}
                    </li>
                ))}
            </ul> */}




    export default Drug;
