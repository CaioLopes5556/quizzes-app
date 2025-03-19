import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import './Quizz.css'

const Quizz = ({QuizzArray, Tittle,changeBg,bg}) => {
   
   changeBg(bg)

   let [index, setIndex] = useState(0)
   let [score, setScore] = useState(0)
   let [result, setResult] = useState(false)
   let [msgResult, setMsgresult] = useState('')

   const totalScore = QuizzArray.length * 50;
   const [questions, setQuestions] = useState(QuizzArray[index])

   const [lock, setLock] = useState(false)

   let Option1 = useRef(null)
   let Option2 = useRef(null)
   let Option3 = useRef(null)
   let Option4 = useRef(null)

   let option_array = [Option1,Option2,Option3,Option4]

   const checkAns = (e,ans) =>{
    if(lock === false){
        if(questions.ans === ans){
            e.target.classList.add('correct');
            setScore(score + 50)
            setLock(true)
        }else{
            e.target.classList.add('wrong');
            option_array[questions.ans -1].current.classList.add('correct');
            setLock(true);
        }

    }
    
   }

   const nextQuestion = () =>{
        if(lock === true){

            if(index === QuizzArray.length -1){
                setResult(true)

                if(totalScore === score){
                    setMsgresult("Parabéns!! Você acertou todas as questões, confira sua pontuação final:")
                }else if(score > (totalScore/2)){
                    setMsgresult("Uau, Você acertou uma boa quantidade de questões, confira sua pontuação final:")
                }else if(score < (totalScore/2) && score > 0){
                    setMsgresult("Você foi bem até, confira sua pontuação final:")
                }else if(score === 0){
                    setMsgresult("Poxa, não foi dessa vez. confira sua pontuação final:")
                }
            }
            setIndex(++index)
            setQuestions(QuizzArray[index])

            option_array.map((op)=>{
                op.current.classList.remove('correct')
                op.current.classList.remove('wrong')
            })

            setLock(false)
        }   
   }

   const handleReset = () => {
    setIndex(0);
    setQuestions(QuizzArray[0])
    setScore(0);
    setLock(false);
    setResult(false);
   }


  return (
    
    <div className="quizz-container">
        <h1>{Tittle}</h1>


    {!result &&
        <>
          <h2>{index + 1}. {questions.question}</h2>

                    
            <ul>
                <li ref={Option1} onClick={(e) => {checkAns(e,1)} }>{questions.op1}</li>
                <li ref={Option2} onClick={(e) => {checkAns(e,2)} }>{questions.op2}</li>
                <li ref={Option3} onClick={(e) => {checkAns(e,3)} }>{questions.op3}</li>
                <li ref={Option4} onClick={(e) => {checkAns(e,4)} }>{questions.op4}</li>
            </ul>

            <div className="quizz-content">
            <p className="questions">Questão {index + 1} de {QuizzArray.length}</p>
            <button onClick={nextQuestion}>Próxima</button>
            <p className="score">{score} pontos</p>
            </div>
        </> 
    }
    {result && 

    <div>
        <h2>{msgResult}</h2>
        <p className='final-score'>{score} Pontos!</p>
        {
        totalScore === score &&
        <div className='winner-gif'>
            <img src="/winner.gif" alt="gif de vitória" />
        </div>
        }

        <div className="quizz-content">
            <button onClick={handleReset}>Reset</button>
            <NavLink to='/'>Voltar</NavLink>
        </div>
    </div>
    
    
    }
    

    </div>
  )
}

export default Quizz