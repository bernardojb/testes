import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import {motion} from 'framer-motion'

const Product = props => (
    <motion.div exit={{opacity: 0 }}>
        <h1>{props.product.name}</h1>
        <Link
        href="/"
        >
        <a>Home</a>
        </Link>
    </motion.div>
);

Product.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(
        `https://my-json-server.typicode.com/bernardojb/testes/products/${id}`
    );
    const product = await res.json();
    return { product };
};

export default Product;