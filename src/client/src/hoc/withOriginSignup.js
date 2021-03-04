const withOriginSignup = (Component) => {
    const signup = (e) => {
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

    return () => <Component action={signup} />;
};

export default withOriginSignup;
