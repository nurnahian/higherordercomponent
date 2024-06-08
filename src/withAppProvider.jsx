import React from "react";

function withAppProvider(Component) {

  const isAuth = false;

  function withAppProvider(props) {
    if (isAuth) {
      return <Component {...props} />;
    } else {
      return (
        <>
          <p>Please Log In</p>
        </>
      );
    }
  }
  return withAppProvider;
}

export default withAppProvider;
