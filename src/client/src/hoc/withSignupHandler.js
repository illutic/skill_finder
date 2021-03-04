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
