//hooks
import { NavLink } from 'react-router-dom'
import React from 'react'

//images
import popImg from '../assets/img/pop-img.png'
import techImg from '../assets/img/wd-img.png'
import horrorImg from '../assets/img/horror-img.png'

//styles
import './Home.css'

const Home = ({bg}) => {

  if(bg){
    const classArray = document.body
    while (classArray.classList.length > 0) {
      classArray.classList.remove(classArray.classList.item(0));
    }
  }

  console.log()


  return (
    <div className='home'>
        <h1>Quizz Theme</h1>

        <ul className="instructions">
          <li>
            <h2>Pop Quizz:</h2>
            <p>8 perguntas sobre cultura pop, com foco no universo da música</p>
          </li>
          <li>
            <h2>Tech Quizz:</h2>
            <p>8 perguntas sobre tecnologia, com foco em Desenvolvimento Web</p>
          </li>
          <li>
            <h2>Horror Quizz:</h2>
            <p>8 perguntas sobre filmes de terror.</p>
          </li>
        </ul>

        <h3>Clique em uma das opções abaixo:</h3>

        <div role='navigation' className="link-group">
        <NavLink className='card-link pop-quizz' to='/popquizz'>
          <p className="quizz-tittle">
            Pop Quizz
          </p>
          <img src={popImg} alt="sabrina carpenter pic" />
        </NavLink>

        <NavLink className='card-link tech-quizz' to='/techquizz'>
          <p className="quizz-tittle">
            Tech Quizz
          </p>
          <img src={techImg} alt="tech img" />
        </NavLink>

        <NavLink className='card-link horror-quizz' to='/horrorquizz'>
          <p className="quizz-tittle">
            Horror Quizz
          </p>
          <img src={horrorImg} alt="ghost face pic" />
        </NavLink>
        </div>
    </div>
  )
}

export default Home