import { useRef, useEffect } from 'react';
import { ResultListWrapper, StyledList, StyledListItem} from './styles';

const ClickedOutside = (ref, reFunc) => {
    useEffect(()=> {
         const handleOutsideClick = (e) => {
            if(ref.current && !ref.current.contains(e.target)) {
                reFunc([]);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return() => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, [ref]);
}

const ListComponent =({movies, clickFunc, updateListFunc}) => {
    const wrapperRef= useRef();
    ClickedOutside(wrapperRef, updateListFunc);

    return <ResultListWrapper ref= {wrapperRef}><StyledList>
    {movies.map((movie) => (
        <StyledListItem key={movie.imdbID} onClick={() => clickFunc(movie.Title)}>{movie.Title}</StyledListItem>
    ))}
</StyledList></ResultListWrapper>
};

export default ListComponent;