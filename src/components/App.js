import React, { useEffect, useState } from 'react'

function  App() {
    const [dogPic, setDogPic] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((data) => {
            setDogPic(data.message);
        })
    }, []);
    if (!dogPic) return <p>Loading...</p>
    return <img src={dogPic} alt=" A random dog pic" />
};
export default App;
