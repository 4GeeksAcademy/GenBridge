import React from "react";
import cocina from "../../img/cocina.jpeg";
import tertulias from "../../img/tertulias.jpeg";
import rap from "../../img/rap.jpeg";
import ravera from "../../img/ravera.jpeg";
import abueloarquitecto from "../../img/abueloarquitecto.jpeg";
import abuelosgamers from "../../img/abuelosgamers.jpeg";
import abueloviajero from "../../img/abueloviajero.jpeg";
import cine from "../../img/cine.jpeg";
import "../../styles/videoroom.css";


export const VideoRoomCard = () => {
    return (
        <div className="container">
            <div className="display-container">
                <div className="name-container">
                    <h1>Cocinando con la abuela</h1>
                </div>

                <div className="image-container">
                    <img src={cocina} className="imagevideo" />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>

            {/* ------------------------------------------- */}
            <div className="display-container">
                <div className="name-container">
                    <h1>Los tertulianos del barrio </h1>
                </div>

                <div className="image-container">
                    <img className="imagevideo" src={tertulias}  />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>

             {/* ------------------------------------------- */}

             <div className="display-container">
                <div className="name-container">
                    <h1>Abuelos gamers</h1>
                </div>

                <div className="image-container">
                    <img src={abuelosgamers} className="imagevideo" />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>

              {/* ------------------------------------------- */}

              <div className="display-container">
                <div className="name-container">
                    <h1>Historias fiesteras</h1>
                </div>

                <div className="image-container">
                    <img src={ravera} className="imagevideo" />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>

              {/* ------------------------------------------- */}

              <div className="display-container">
                <div className="name-container">
                    <h1>Abuelos arquitectos</h1>
                </div>

                <div className="image-container">
                    <img src={abueloarquitecto} className="imagevideo" />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>

             {/* ------------------------------------------- */}

             <div className="display-container">
                <div className="name-container">
                    <h1>Abuelos viajeros</h1>
                </div>

                <div className="image-container">
                    <img src={abueloviajero} className="imagevideo" />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>

               {/* ------------------------------------------- */}

               <div className="display-container">
                <div className="name-container">
                    <h1>Abuelos cinefilos</h1>
                </div>

                <div className="image-container">
                    <img src={cine} className="imagevideo" />
                </div>

                <div className="button-container"> <button type="button" className="btn btn-primary">
                    Unete a la sala
                </button></div>  
            </div>




        </div>
    );
};