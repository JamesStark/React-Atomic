import React from "react";

class Login extends React.Component {
  state = {
    
  };

  render() {
    return (
      <div>
       <p>Here Goes AuthPage</p>
       {/* use Link tag instead of anchor tag to reduce page reloading */}
       <a href="/dashboard/home">Go to Home page</a>
      </div>
    );
  }
}

export default (Login);
