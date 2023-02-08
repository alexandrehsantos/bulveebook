import Recommendation from "../Recommendation";
import bookImage from '../../images/book.png'
import { books } from "../Search/fake-database";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    color: ${props => props.color || "#fff"};
    font-size : ${props => props.size || "10px"};
    text-align: ${props => props.align || "center"};
    width: 100%;
    background-color: #FFF;
    margin: 0px;
    padding: 30px 0;
`

const NewBooks = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastBookReleases() {
    return (
        <Wrapper>
            <Title size={"30px"} align={"center"} color={"#000"}> ÚLTIMOS LANÇAMENTOS </Title>
            <NewBooks>
                {books.map((book) => (
                        <img src={book.src} />
                ))}
            </NewBooks>
            <Recommendation
                title='Talvez você tenha interesse por'
                subtile="Python para investidores"
                description='Analizando tendencias de forma prática e eficiente'
                imageSource={bookImage}
            />
        </Wrapper >
    )
}

export default LastBookReleases;