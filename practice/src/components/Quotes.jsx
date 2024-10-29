import { useState } from "react";
import './index.css';

const Quote = ({quote, author})=> {
    return(
        < >
          <div className="quote">{quote}</div>
        <p className="quote-author">{author}</p>
        
        </>
    )
}
export default Quote;