import React from "react";

const Skills = () => {
    const [header] = React.useState({
        subHeader: "Skills",
    });

    return (<div class="container1">
    <div class="col">
      <h2 class="plataformas titulo">Skills</h2>
      <ul class="skill">
        <li><span class="purple1line html"></span><em>HTML</em></li>
        <li><span class="purple1line css"></span><em>CSS</em></li>
        <li><span class="purple1line php"></span><em>PHP</em></li>
        <li><span class="purple1line javascript"></span><em>Javascript</em></li> 
        <li><span class="purple1line reactjs"></span><em>React.Js</em></li>
      </ul>
    </div>
      <div class="col">
      <ul class="skill  skill1">
        <li><span class="purpleline Csharp"></span><em>C#</em></li>
        <li><span class="purpleline MySql"></span><em>My Sql</em></li>
        <li><span class="purpleline Cplusplus"></span><em>C++</em></li>
        <li><span class="purpleline AdobePhotoshop"></span><em>Adobe Photoshop</em></li>
        <li><span class="purpleline AdobePhotoshopPro"></span><em>Adobe Photoshop Pro</em></li>
      </ul>
    </div>
      <div class="col">
      
    </div>
  </div>)

}

export default Skills;