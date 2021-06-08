import {useEffect, useState} from 'react';

function Example() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://omdbapi.com/?s=in*&type=movie&apikey=ed286b7a')
        .then((response)=> response.json())
        .then(setData);

    }, []); // dependency array used to trigger only at mounting time not at update time. If removed will be triggered at update also.

    if(data) {
        return (
        <>
        <button onClick={() => setData([])}>Clear Data</button>
        <ul>
            {data.map((user) => (
                <li key={user.imdbID}>{user.Title}</li>
            ))}
        </ul>
        </>);
    }
    return <div>No Users..</div>
  
}

export default Example;
