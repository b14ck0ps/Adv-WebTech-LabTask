import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
export default function ShowProducts() {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data)
            })
    }, [])


    const handleDelete = (id) => {
        axios.delete(`/api/products/${id}`)
            .then(response => {
                const newProducts = products.filter(product => product.id !== id)
                setProducts(newProducts)
            })
    }

    return (
        <div className='container'>
            <h1>Products List</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <a href={`/edit?id=${product.id}`} className='btn btn-primary'>Edit</a>
                                <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

if (document.getElementById('products')) {
    ReactDOM.createRoot(document.getElementById("products")).render(
        <React.StrictMode>
            <ShowProducts />
        </React.StrictMode>
    )
}
