
import './css/styles.css';

function App() {
  return (
    <div className='app'>
      <header>
        <div className='logoBox'>
        <div className="logo"></div>
        </div>
        <div className='logIn'>
        <div className='signIn'>Sign In</div>
        <div className='signUp'>Sign Up</div>
        </div>
      </header>
      <div className='heroColor'>
      <div className='hero'> 
        <div className="heroTitle">TrakIt</div>
        <div className='heroText'>Track and Find where your stuff is</div>
      </div>
      </div>
      <div className='quoteBox'>
        <div className='quote'>“I feel like I’ll never lose another thing in my home again. TrakIt helps to let me know where everything is.” Chris Juber</div>
      </div>
      <div className='linkBoxes'> 
      <div className='linkBox1'>
      <div className='linkBox'>
        <div className="linkTitle">What is Trakit</div>
        <div className="readMore">Read More</div>
      </div>
      </div>
      <div className='linkBox2'>
      <div className='linkBox'>
        <div className="linkTitle">Plans</div>
        <div className="readMore">Read More</div>
      </div>
      </div>
      <div className='linkBox3'>
      <div className='linkBox'>
        <div className="linkTitle">Contact</div>
        <div className="readMore">Read More</div>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
