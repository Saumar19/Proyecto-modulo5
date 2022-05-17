import React from "react";
import imagen from "../../images/Medicamento.jpeg";
import "./css/drug.css";

function Drugs({ name, dosage_form, alert_reason, use, note }) {
  return (
    <div className="card h-1">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Nombre: {name}</h5>
        <h5 className="card-title">Presentación: {dosage_form}</h5>
        <p className="card-text">
          <strong>Motivo de la alerta:</strong> {alert_reason}
        </p>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <strong>Uso</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{use}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <strong>Nota</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{note}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drugs;

{
  /*             <p className="card-text">
              <strong>Uso:</strong> 
            </p>
            <p className="card-text">
            <strong> Nota: </strong> 
            </p>
          */
}
