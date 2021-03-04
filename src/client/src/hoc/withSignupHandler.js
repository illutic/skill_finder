// This HOC provides a method that sends a signup request to the server.
// It can be used on components that include a signup form.
// The method can be forwarded to a form and implemented as an onSubmit handler.
import React from 'react';

const withSignupHandler = (Component) => {
    const signupHandler = (e) => {
        e.preventDefault();
        const formChildren = [...e.target.children];
        const data = {};
        for (const child of formChildren) {
            if (child.tagName === 'INPUT') {
                data[child.name] = child.value;
            }
        }
        console.log(data);
    };

    return () => <Component handler={signupHandler} />;
};

export default withSignupHandler;
