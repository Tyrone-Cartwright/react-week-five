
import './App.css';

function App() {
  return (
    <>
      <main className="grid">
        {/* <img src={desktop} alt="desktop print background"/> */}
        <div className="content">
          <div className="code">
            <h1>Learn to code by watching others</h1>
          </div>
          <div className="desc">
            <p>
              See how experienced developers solve problems in real time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </p>
          </div>
        </div>
        

        <div className="free">
          <a href="https://wwww.google.com">
            <h4>Try it free 7 days <span>then $20/mo. thereafter</span></h4>
          </a>
        </div>
        <div className="form">
          <form className="field">
            <input type="text" name="firstName" id="fname" placeholder="First Name" required/>
            <input type="text" name="lastName" id="lname" placeholder="Last Name" required/>
            <input type="email" name="email" id="email" placeholder="Email Address" required/>
            <input type="password" name="password" id="pword" placeholder="Password" required/>
            <a href="https://www.google.com" className="claim">
              Claim your free trial
            </a>
            <p>By clicking the button you are agreeing to our <span className="terms">Terms and Services</span>
            </p>
          </form>
        </div>
      </main>     
    </>
  );
}

export default App;
