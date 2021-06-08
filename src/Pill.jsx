import {StyledLabel, StyledClose} from './styles';


const Pill = ({name, removeFunc}) => {
    return <StyledLabel>{name}<StyledClose onClick={()=>removeFunc(name)}/></StyledLabel>;
};

export default Pill;