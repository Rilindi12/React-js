import { Coming_Soon } from "../data/comingSoon";
import ComingSoon from "./ComingSoon";

export default function ComingSoonData () {
  return (
    <div className="container-items">
        {Coming_Soon.map((item, index) => 
          <ComingSoon 
          key={index}
          icon={item.icon}
          desctription={item.desctription}
          />
        )}
    </div>
  )
}