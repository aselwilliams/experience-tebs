import {useState, useEffect} from 'react';
import {FaSpinner} from 'react-icons/fa'
import './App.css';
const url='https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] =useState(0);
  const [loading ,setLoading] = useState(true);

  const getData=async ()=>{
    const res= await fetch(url)
    const data= await res.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  })
const {company, dates, title, duties} =jobs[index]
  return (
    <section className="App">
      {loading && <section className='section loading'><FaSpinner /></section>}

  
    </section>
  );
}

export default App;
