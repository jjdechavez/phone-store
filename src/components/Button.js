import styled from 'styled-components';

export const ButtonContainer = styled.button `
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    background: ${props => props.cart ? "var(--mainWhite)" : "var(--secDark)"};
    border: 2px solid var(--secDark);
    border-color: ${props => props.cart ? "var(--mainGray)" : "var(--secDark)"};
    color: ${props => props.cart ? "var(--secDark)" : "var(--mainWhite)"};
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;

    background-image: linear-gradient(to right, ${props => props.cart ? "var(--secDark)" : null} 50%, transparent 50%);
    background-position: 100% 0%;
    background-size: 200% 100%;

    transition: all 0.5s ease-in-out;
    &:hover{
        color: ${props => props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
        background-position: 0% 50%;
    }
    &:focus{
        outline: none;
    }
`;