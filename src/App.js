import {useState, useEffect} from 'react';
import {FaSpinner,FaAngleDoubleRight} from 'react-icons/fa'
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
  },[])
  if(loading) {
    return (
<section className='section loading'><FaSpinner /></section>
    )
  }
   const {company, duties, title, dates} =jobs[index]
  return (
    <section className="container">
    <header>
      <h1 className='title'>Experience</h1>
     <div className='underline'></div>
     </header>
     <main className='main'>
    
      <div className='btn-container'>
        {jobs.map((item, ind)=>(
          <button key={ind} onClick={()=>setIndex(ind)} className='btn'>{item.company}</button>
        ))}
      </div>
     <article className='job-info'>
          <h3 className='position'>{title}</h3>
          <h4 className='company'>{company}</h4>
          <p className='dates'>{dates}</p>
       {duties.map((duty,ind)=>{
         return (
           <div className='duty-row' key={ind}>
             <FaAngleDoubleRight className='job-icon' />
             <p>{duty}</p>
           </div>
         )
       })}
     </article>
     </main>
    </section>
  );
}

export default App;
