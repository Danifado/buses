import React from "react";

function Silla(sillas) {
    // console.log(sillas.sillas)
  let content = null;

  if (Array.isArray(sillas.sillas)) {
    console.log("ASDASDASDSAD");
    content = (
        <div className="flex justify-center busBorder">

            <div className="justify-items-center justify-center grid grid-cols-2 gap-1 w-3/4">
                    {sillas.sillas.map((silla) => (
                        
                        <div className={`silla ${silla.isActive ? 'active-seat' : 'inactive-seat'} ${silla.estaOcupado ? 'used-seat' : 'unused-seat'}`} key={silla._id}>
                        </div>
                    ))}


            </div>
        </div>
    );
  }

  return <div>{content}</div>;
}

export default Silla;
