import Input from "../Input";
import LastBookReleases from "../LastBookReleases";
import { books } from "./fake-database";
import styled from "styled-components";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

const Wrapper = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding   : 85px 0;
    height: 270px;
    width: 100%;

`

const Title = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [researchedBooks, setresearchedBooks] = useState([]);
    console.log(researchedBooks)
    return (
        <Wrapper>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={evento => {
                    const typedText = evento.target.value
                    var searchResult = [];
                    if (typedText) {
                        searchResult = books.filter(book => book.name.includes(typedText))
                    }
                    console.log("Typed text" + typedText)
                    setresearchedBooks(searchResult)
                }}
            />
            {researchedBooks.map(book => (
                <Result>
                    <img src={book.src} alt={book.name} />
                    <p>{book.name}</p>
                </Result>
            ))}
        </Wrapper>
    )
}

export default Search;