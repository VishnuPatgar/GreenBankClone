import React from 'react'
import "./Homepage.css"

export default function Homepage() {
  const co = {
    color: 'var(--token-d4b91c24-65b7-4f77-9361-9783955eb4ab, rgb(86, 240, 159))'
  };


  return (
    <div id='main'>
      <div>
        <nav>
          <ul>
            <li>
              <a href='./'><img src='https://framerusercontent.com/images/DeaBvfKBRz45ZZuU1oGqLLh2o.svg' alt='green bank logo' /></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='./'><p>Features</p></a>
            </li>
            <li>
              <a href='./'><p>How It Works</p></a>
            </li>
            <li>
              <a href='./'><p>Testinomials</p></a>
            </li>
          </ul>
          <ul>
            <li>
              <button> <a href='./'><p>Buy Template</p></a></button>
            </li>
          </ul>
        </nav>
      </div>
      <div>

        <div className='container'>
          <div className='column left'>
            <div className='btns'>
              <a href='./'>
                <button className='outerbtn'><button className='innerbtn'><p>New</p></button><p>Beta now available</p> </button>
              </a>
            </div>
            <div className='Heading'>
              <h1>Empower Your <span style={co}>Finances</span> For A Brighter Future.</h1>

            </div>
            <div>
              <p className='subtext'>
                Streamline your payments with GreenBank. Instant bank transfers, hassle-free bill payments, and more – all at your fingertips.
              </p>
            </div>
            <div>
              <a href='./'>
                <button className='download'><img src="https://www.freeiconspng.com/uploads/apple-icon-27.png" width="30" alt="Apple Logo download apple apps" /><p className='downloadtext'>Download App</p></button></a>
            </div>



            <div class="image-container">
              <img src='https://framerusercontent.com/images/BV7POYVWUCVIlZ7MWi4yKz2q4.jpg' alt="green bank user" className="overlap-img" />
              <img src='https://framerusercontent.com/images/ROtYH0i4Ju1zy0b3ktk5tYD27k.jpg' alt="green bank user" className="overlap-img" />
              <img src='https://framerusercontent.com/images/rsJ7qH7Mbs7CJkuvl24AzIdFM8Y.jpg' alt="green bank user" className="overlap-img" />
              <p className='overlap-img'>200K+ Downloads</p>
            </div>



          </div>
          <div className='column right'>
            <img src='https://framerusercontent.com/images/4ttwAhUaUCA6I91ohzPsDV0SM.png' alt='grren bank payment demo' className='rightimg' />
          </div>
        </div>



        <div className='container2'>
          <div className='column left'>
            <p className='cnt2p'>WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE</p>
          </div>
          <div className='column right' id='right'>
            <div className="marquee">
              <ul className='ulc'>
                <li>
                  <img src='https://as1.ftcdn.net/v2/jpg/01/68/34/70/1000_F_168347087_s0Qc7fRHrLqRVP67uTaxJN8tUBKm4aIm.jpg' alt='grreen bank customers' className='custlogo' />
                </li>
                <li>
                  <img src='https://as2.ftcdn.net/v2/jpg/02/44/26/17/1000_F_244261746_ULE6cl1V0To0FCVJ53Y3nYARwy3ZaWfv.jpg' alt='grreen bank customers' className='custlogo' />
                </li>
                <li>
                  <img src='https://as1.ftcdn.net/v2/jpg/00/88/48/86/1000_F_88488640_07OlofRgXg3wYhAP65bAYiCY0P69UnfL.jpg' alt='grreen bank customers' className='custlogo' />
                </li>
                <li>
                  <img src='https://as1.ftcdn.net/v2/jpg/01/63/73/66/1000_F_163736658_4Cr53IHhch8k91VgjtBd30XzFeN7ixzc.jpg' alt='grreen bank customers' className='custlogo' />
                </li>

              </ul>

            </div>
          </div>
        </div>


        <div className='container3'>

          <div className="headcard">
            <div className="headcard-content">
              <h2>Discover What We<span style={co}> Offer</span></h2>
              <p>Elevate your e-commerce experience with our powerful feature set designed for unparalleled excellence.</p>
            </div>
          </div>
          <div className='cardcontainer'>
            <ul className='divcard'>
              <li className='mycard' id='mycard1'>
                <div className="card-body">
                  <div className='cardcolumn'>
                    <h3>Manage All Your Credit Cards in One Place.</h3>
                    <p>Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts.</p>
                  </div>
                  <div className='cardcolumn'>
                    <img src='https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=2048' alt='type of card service by greenbank' />

                  </div>


                </div>

              </li>
              <li className='mycard' id='mycard2'>
                <div className="card-body">
                  <div className='cardcolumn'>
                    <h3>Goal-Oriented Financial Planning.</h3>
                    <p>Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams.</p>
                  </div>
                  <div className='cardcolumn'>
                    <img src="https://framerusercontent.com/images/OCVW8nXVu1qZg6ryJGiluK3nYg.png" alt='mobile banking in greenbank' id='cardimg2' />
                  </div>


                </div>
              </li>
              <li className='mycard' id='mycard3'>
                <div className="card-body">
                  <div className='cardcolumn'>
                    <h3>Smart Spending Insights.</h3>
                    <p>Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster.</p>
                  </div>
                  <div className='cardcolumn'>
                    <img src='https://framerusercontent.com/images/cYHFnn9UY2iHtY3tdewXUp467qQ.png' alt='statics greenbank' id='cardimg3' />

                  </div>


                </div>

              </li>

            </ul>
          </div>

        </div>
        <div className='container4'>
          <div className='forflex'>
          <div className='sub4'>          
            <h2>Get Started In Just 3 simple Steps.</h2>
            <p>Three simple steps to unlock the power of GreenBank and revolutionize your banking experience.</p>
          </div>

            <div className='sub4' id='sub44'>
              <div className="scrollcard" id='cardnum1'>
                <button className='btnsteps'>
                 <h3>step 1</h3>
                </button>
                <p>Sign Up with GreenBank</p>
              </div>
              <div className="scrollcard" id='cardnum2'>
              <button className='btnsteps'>
                <h3>Step 2</h3>
                </button>
                <div>

                </div>
                <p>connect your accounts</p>
              </div>
              <div className="scrollcard" id='cardnum3'>
              <button className='btnsteps'>
                <h3>Step 3</h3>
                </button>
                <p>Start banking with GreenBank</p>
              </div>
            </div>




          
  
        </div>
        </div>

      </div>
    </div>
  )
}
