import { useEffect, useState } from 'react'
import Quote from './components/Quotes';
import   './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIdex, setCurrentIndex] = useState(0);

useEffect(()=>{
  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://dummyjson.com/quotes');
      if(!response.ok){
        throw new Error("Error getting  quotes"); 
      }
      const data = await response.json();
      setQuotes(data.quotes);
    } catch (error) {
      setError(error.message);
    }finally {
      setLoading(false);
    }
  };
  fetchQuotes();
},[]);

const handleClick = ()=> {
  setCurrentIndex(preIndex=> (preIndex + 1) %  quotes.length);
}

if(loading) {
  return <div>Loading...</div>
} 
if(error) {
  return <div>Error: {error}</div>
}
const currIndex = quotes[currentIdex];
return (
    <div className="m-div">
    <h3>QUOTES</h3>
      {currIndex && (<Quote key={currIndex.id} quote={currIndex.quote} author={currIndex.author} /> )}
      <button onClick={handleClick} className='btn'>Next</button>
    </div>
  )
}

export default App
