import React from "react";
import './estilo.css'

const Accordion = () =>{
    
    const [active, setActive] = React.useState(false);
    
    return(
        <>
            <div className={active?'accordion active p':'accordion'} onClick={() => setActive(!active)}>
                <h3>Título da safona</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium labore veniam voluptas similique quibusdam molestiae dignissimos animi facere nisi. Voluptatibus debitis, possimus nam qui corporis quae accusantium maxime quisquam.</p>
            </div>
        </>
    )
}

export default Accordion;