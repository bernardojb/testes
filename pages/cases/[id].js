import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Product = props => (
    <div>
        <h1>{props.product.name}</h1>
    </div>
);

Product.getInitialProps = async function (context) {
    const { id } = context.query;
    const red = await fetch(
        `https://my-json-server.typicode.com/bernardojb/testes/products/${id}`
    );
    const product = await res.json();
    return { product };
};

export default Product;