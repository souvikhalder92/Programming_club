import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div>
             <h1>Frequently Asked Questions(FAQ)</h1>
            <div>
               <h2>1.How does react works?</h2>
               <p><strong>Answer:</strong> React uses a declarative paradigm that makes it easier to reason about your application  and aims to be both efficient and flexible.It designs <br />simple views for each  state in your application, and React will efficiently update and render just the right component when your data changes.<br/></p>
               <h2>2.What is the difference between props and state?<br/></h2>
               <p><strong>Answer:</strong> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot <br/>  be passed to other components.<br/></p>
               <h2>3.What does useEffect do without data load?</h2>
               <p><strong>Answer:</strong> The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are  
                directly updating  the DOM, and  <br/> timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
            
        </div>
    );
};

export default Faq;