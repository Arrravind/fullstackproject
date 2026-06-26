import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState('');

    const getUser = async () => {
        const response = await fetch(
            'https://userloginbackend-alpha.vercel.app/api/users',
        );

        const data = await response.json();

        setUsername(data.name);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <h1>Hello {username} </h1>
        </>
    );
}

export default App;
