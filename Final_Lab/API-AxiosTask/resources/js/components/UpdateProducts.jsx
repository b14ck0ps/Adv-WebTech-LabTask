import React from 'react'
import ReactDOM from 'react-dom/client'
export default function UpdateProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    //get a product by id
    const [product, setProduct] = React.useState({
        name: '',
        description: '',
        price: ''
    })

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')




    React.useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => {
                setProduct(response.data)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, description, price);
        axios.post(`/api/products/${id}`, {
            name: name,
            description: description,
            price: price
        }).then(response => {
            window.location = '/all'
            // console.log(response)
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"
                                        value={product.name}
                                        onChange={e => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="description" name="description"
                                        placeholder="Description"

                                        onChange={e => setDescription(e.target.value)}
                                        value={product.description}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="price" name="price" placeholder="Price"
                                        value={product.price}
                                        onChange={e => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

if (document.getElementById('update-product')) {
    ReactDOM.createRoot(document.getElementById("update-product")).render(
        <React.StrictMode>
            <UpdateProducts />
        </React.StrictMode>
    )
}
