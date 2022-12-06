import React from 'react'
import ReactDOM from 'react-dom/client'

function CreateProducts() {

    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/products', {
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
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={e => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="description" name="description"
                                        placeholder="Description" onChange={e => setDescription(e.target.value)} />

                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="price" name="price" placeholder="Price" onChange={e => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProducts

if (document.getElementById('create-products')) {
    ReactDOM.createRoot(document.getElementById("create-products")).render(
        <React.StrictMode>
            <CreateProducts />
        </React.StrictMode>
    )
}
