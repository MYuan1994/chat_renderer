import React, { useEffect, useState } from 'react'

import styles from '../App.module.css'

import Robot from './Robot';

interface Props { }

interface State {
    products: any
}

const Products: React.FC<Props> = (props) => {
    // products:Props.products?Props.products:[]

    const [products, setProducts] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<String>('');


    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const resData = await response.json();
                setProducts(resData)
            } catch (error) {
                setError(error.message)
            }
            setLoading(false)
        };
        fetchData();

    }, [])


    return (
        <div>
            
            {!error && error === '' ?
                (!loading ?
                    <div className={styles.robotList}>
                        {products.map((r) => (
                            <Robot id={r.id} name={r.name} email={r.email} />
                        ))}
                    </div>
                    :
                    <h2>加载中……</h2>)
                :
                <h2>网站错误：{error}</h2>
            }

        </div>
    )

}

export default Products;