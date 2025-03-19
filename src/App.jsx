//hooks
import { BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css'
//components
import Quizz from './components/Quizz'

//data
import { tech_quizz, pop_quizz, horror_quizz } from './data/data'

//pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'


function App() {

  const changeBackground = (background) =>{
    document.body.classList.add(background)
  }
 
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route 
          path='/' 
          element={<Home bg={true}
          />}  
          />
          <Route 
          path='/techquizz' 
          element={<Quizz QuizzArray={tech_quizz}
          changeBg={changeBackground} 
          bg='tech-quizz' 
          Tittle={'Tech Quizz'}
          />} 
           />
          <Route 
          path='/popquizz' 
          element={<Quizz QuizzArray={pop_quizz}
          changeBg={changeBackground}
          bg='pop-quizz'  
          Tittle={'Pop Quizz'}
          />}  
          />
          <Route 
          path='/horrorquizz' 
          element={<Quizz QuizzArray={horror_quizz}
          changeBg={changeBackground}
          bg='horror-quizz'  
          Tittle={'Horror Quizz'}
          />}  
          />
          <Route 
          path='*' 
          element={<NotFound
          />}  
          />

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
