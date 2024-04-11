import { CORE_Concept } from "../data";
import About from "../About/about";

export default function CoreConcepts () {
  return (
    <div className='container-top-about'>
        {CORE_Concept.map((concept,index) => 
          <About 
            key={index}
            title={concept.title}
            desctription={concept.desctription}
            image={concept.img}
          />
        )}
  </div>
  )
}