import React, { useState } from "react";

function Assignment() {
   const [sub, setSub] = useState("Submit");

   const complete = () => {
      let v = "Done";
      setSub(v);
   };

   return (
      <>
         <div className="assignMent-con">
            <h1>Technical Project Management</h1>
            <button
               onClick={complete}
               style={
                  sub === "Done" ? { background: "green" } : { background: "#3683F0" }
               }
            >
               {sub}
            </button>
         </div>
         <div className="note-con">
            <h3>Explore the world of management</h3>
            <p>
               As a project manager, you play an important role in leading a project
               through initiation, planning, execution, monitoring, controlling and
               completion. How? Do you want to manage each and every step of your
               life?
            </p>
         </div>
      </>
   );
}

export default Assignment;
