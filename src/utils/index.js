export const createUser = async (username, email, pass, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                // username: "AndyB",
                // email: "andyb@email.com",
                // password: "test123"
                username: username,
                email: email,
                password: pass
            }),
        });

        const data = await response.json();
        // setter({username: data.user});
        setter(data.user);
        localStorage.setItem("myToken", data.token);

        console.log(`${data.user} added.`);
        // console.log(data);

    } catch (error) {
        console.log(error);
    }
};

//mostly copypaste
export const login = async (username, pass, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username: username,
                password: pass
            }),
        });

        const data = await response.json();
        // setter({username: data.user});
        setter(data.user);
        localStorage.setItem("myToken", data.token);
        // console.log(`${data.user} added.`);
        // console.log(data);

    } catch (error) {
        console.log(error);
    }
};

export const tokenLogin = async (setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Authorization" : `Bearer ${localStorage.getItem("myToken")}`}
        });
        const data = await response.json();
        setter(data.user);
    } catch (error) {
        console.log(error);
    }
};