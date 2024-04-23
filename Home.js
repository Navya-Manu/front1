import React from 'react';

 
const Home = () => {
  const goToLoginPage=()=>{
    window.location.href='/signup';
  };
  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
      <h2>Welcome Page</h2>

      
        

       
          <div>
            <h2>Welcome</h2>
            <div>
              <button onClick={goToLoginPage}>Login</button>
            </div>
          </div>
        


    
    </div>
  );
};
 
export default Home;