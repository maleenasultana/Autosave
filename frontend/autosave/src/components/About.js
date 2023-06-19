import React from "react";
import "./About.css"
import  AutoSaveHook from "./AutoSaveHook"

function About() {
  // const a = useContext(NoteContext)
  return (
    <div className="container">
       <p className="para ">React-autosave is an extremely lightweight component or hook that periodically
        triggers a callback function if, and only if, the value to update has changed.<br/>
         Typically, this is used to make API calls when a user stops typing for a second in some input, but you could technically use this for any side effect you wanted<br/>
          to debounce. 🎉</p>
          <span>Example:-</span>
          <div>
            <AutoSaveHook/>
          </div>
          <p>output:- <br/><h2>saved successfully</h2><br/>
           (displayed in console)</p>
    </div>
  )
}

export default About;