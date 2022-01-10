import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Link from 'next/link';
import AddToCart from './AddToCart';

function PartCard(item) {

    const {
        image,
        name,
        id,
        price,
        description,
        quantity,
        model
    } = item;

    // const addToCart = () => {

    // };

    // function logInAlert(event) {
    //     event.preventDefault();
    //     return alert("Please, log in to add items to your cart.");
    // }

    return (
        <PartCardStyle className='card'>
            <LinkStyles>
                <Link href={`/part/${id}`}>
                    <img className='card-img-top' src={image} alt={'Image of ' + name} />
                </Link>
            </LinkStyles>
            <div className='card-body'>
                <LinkStyles>
                    <Link href={`/part/${id}`}>
                        <h5 className='card-title'>{name}</h5>
                    </Link>
                </LinkStyles>
                <p className='card-price'>${price / 100}</p>
                <p className='card-quantity'>{quantity} left in stock!</p>
                <AddToCart id={id} />
                {/* <button className='btn btn-primary'>Add To Cart</button> */}
            </div>
        </PartCardStyle>
    );
}

export default PartCard;

const PartCardStyle = styled.div`
    width: 20rem;
    margin: 0.5rem;
    color: black;
`

const LinkStyles = styled.div`
    &:hover {
        cursor: pointer;
    }
`