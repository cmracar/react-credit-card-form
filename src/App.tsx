import './App.css';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [cardLayer, setCardLayer] = useState(true);

  const [cardNumberOne, setCardNumberOne] = useState("XXXX");
  const [cardNumberTwo, setCardNumberTwo] = useState("XXXX");
  const [cardNumberThree, setCardNumberThree] = useState("XXXX");
  const [cardNumberFour, setCardNumberFour] = useState("XXXX");
  const [cardName, setCardName] = useState("JOHN DOE");
  const [cardValidOne, setCardValidOne] = useState("**");
  const [cardValidTwo, setCardValidTwo] = useState("**");
  const [cardCVC, setCardCVC] = useState("***");

  const numberOne = useRef<HTMLInputElement>(null);
  const numberTwo = useRef<HTMLInputElement>(null);
  const numberThree = useRef<HTMLInputElement>(null);
  const numberFour = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cardNumberOne !== "XXXX" && cardNumberOne.length === 4) {
      numberTwo.current?.focus()
    }
  }, [cardNumberOne]);

  useEffect(() => {
    if (cardNumberTwo !== "XXXX" && cardNumberTwo.length === 4) {
      numberThree.current?.focus()
    } else if (cardNumberTwo === "XXXX") {
      numberOne.current?.focus()
    }
  }, [cardNumberTwo]);

  useEffect(() => {
    if (cardNumberThree !== "XXXX" && cardNumberThree.length === 4) {
      numberFour.current?.focus()
    } else if (cardNumberThree === "XXXX") {
      numberTwo.current?.focus()
    }
  }, [cardNumberThree]);

  useEffect(() => {
    if (cardNumberFour === "XXXX") {
      numberThree.current?.focus()
    }
  }, [cardNumberFour]);

  useEffect(() => {
    numberOne.current?.focus()
  }, []);

  return (
    <>
      <div className="container">
        <div className="jumbotron mt-5">
          <h3><b>Step 3:</b> Card Information</h3>
          <hr />

          <div className="scene">
            <div className={cardLayer === true ? "card-container" : "card-container isFlipped"}>
              <div className="card">

                <div className="chip-logo"></div>
                <div className="card-number">
                  {cardNumberOne} {cardNumberTwo} {cardNumberThree} {cardNumberFour}
                </div>
                <div className="card-name">
                  {cardName}
                </div>
                <div className="card-valid">
                  {cardValidOne}/{cardValidTwo}
                </div>
                <div className="mc-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 152.407 108">
                    <g>
                      <rect width="152.407" height={108} style={{ fill: 'none' }} />
                      <g>
                        <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" style={{ fill: '#ff5f00' }} />
                        <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" style={{ fill: '#eb001b' }} />
                        <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" style={{ fill: '#f79e1b' }} />
                        <path d="M450.76889,328.3077v-1.1589h.4673v-.2361h-1.1901v.2361h.4675v1.1589Zm2.3105,0v-1.3973h-.3648l-.41959.9611-.41971-.9611h-.365v1.3973h.2576v-1.054l.3935.9087h.2671l.39351-.911v1.0563Z" transform="translate(-319.79649 -252)" style={{ fill: '#f79e1b' }} />
                      </g>
                    </g>
                  </svg>
                </div>

              </div>

              <div className="card card-back">

                <div className="black-area"></div>

                <div className="signature-area">
                  <div className="row">
                    <div className="col">
                      <div className="signature"></div>
                    </div>
                    <div className="col">
                      <div className="cvc">{cardCVC}</div>
                    </div>
                  </div>
                  
                  
                </div>

              </div>
            </div>
          </div>


          <hr />
          <div className="form-group">
            <form>


              <label htmlFor="cardNumber">Card Number: </label>
              <div className="row">
                <div className="col">
                  <input type="text" ref={numberOne} maxLength={4} placeholder="XXXX" className="form-control" onChange={(e) => setCardNumberOne(e.target.value === "" ? "XXXX" : e.target.value)} />
                </div>
                <span className="spanSlice">-</span>
                <div className="col">
                  <input type="text" ref={numberTwo} maxLength={4} placeholder="XXXX" className="form-control" onChange={(e) => setCardNumberTwo(e.target.value === "" ? "XXXX" : e.target.value)} />
                </div>
                <span className="spanSlice">-</span>
                <div className="col">
                  <input type="text" ref={numberThree} maxLength={4} placeholder="XXXX" className="form-control" onChange={(e) => setCardNumberThree(e.target.value === "" ? "XXXX" : e.target.value)} />
                </div>
                <span className="spanSlice">-</span>
                <div className="col">
                  <input type="text" ref={numberFour} maxLength={4} placeholder="XXXX" className="form-control" onChange={(e) => setCardNumberFour(e.target.value === "" ? "XXXX" : e.target.value)} />
                </div>
              </div>

              <label htmlFor="cardNameSurname">Name & Surname: </label>
              <input type="text" placeholder="John Doe" className="form-control" onChange={(e) => setCardName(e.target.value === "" ? "JOHN DOE" : e.target.value)} name="cardNameSurname" id="cardNameSurname" />


              <div className="row">
                <div className="col">

                  <label htmlFor="valid">Valid Thru: </label>
                  <div className="row">
                    <div className="col">
                      <input type="text" maxLength={2} className="form-control" placeholder="**" onChange={(e) => setCardValidOne(e.target.value === "" ? "**" : e.target.value)} name="validOne" id="validOne" />
                    </div>
                    <span className="spanSlice">/</span>
                    <div className="col">
                      <input type="text" maxLength={2} className="form-control" placeholder="**" onChange={(e) => setCardValidTwo(e.target.value === "" ? "**" : e.target.value)} name="validTwo" id="validTwo" />
                    </div>
                  </div>

                </div>

                <div className="col">

                  <label htmlFor="cvc">CVC: </label>
                  <input type="text" maxLength={3} className="form-control" placeholder="***" onSelect={() => setCardLayer(false)} onBlur={() => setCardLayer(true)} onChange={(e) => setCardCVC(e.target.value)} name="cvc" id="cvc" />

                </div>

              </div>

              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
