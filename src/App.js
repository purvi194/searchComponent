import { useState } from 'react';
import {searchMovies} from './SearchHelper';
import {Container, InputWrapper, PillWrapper, StyledInput} from './styles';
import Pill from './Pill';
import ListComponent from './ListComponent';

const App =() => {
    const [inputString, updateString] = useState('');
    const [movies, updateList] = useState([]);
    const [selectedMovieList, updateSelectedList] = useState([]);
   

    const removeMovie = val => {
        const filteredList = selectedMovieList.filter((value) => value !== val);
        updateSelectedList(filteredList);
    };

    const handleChange = async (e) => {
        const value = e.target.value;
        updateString(value);
        if(value.length > 2) {
            const data = await searchMovies(value);
            updateList(data);
        } else {
            updateList([]);
        }
    };

    const movieClicked = name => {
        if(selectedMovieList.length === 5) {
            alert('You can only add upto 5 movies.');
        } else {
            updateSelectedList([...selectedMovieList, name]);
            updateList([]);
            updateString('');
        }
    };

    

    return (
        <Container>
            <InputWrapper>
                {selectedMovieList.length> 0 && (
                    <PillWrapper>
                        {selectedMovieList.map((movie) => (
                            <Pill key={movie} name={movie} removeFunc={removeMovie}/>
                        ))}
                    </PillWrapper>
                )}
                <StyledInput value={inputString} onChange={handleChange} placeholder='Search a movie...'/>
            </InputWrapper>
            {movies && movies.length > 0 && (
                <ListComponent movies={movies} clickFunc={movieClicked} updateListFunc={updateList}/>
            )}
        </Container>
    );
}

export default App;
