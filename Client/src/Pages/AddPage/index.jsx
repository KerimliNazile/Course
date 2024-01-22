import React, { useEffect, useState } from 'react'
import Formikk from '../../Components/Formikk'
import axios from 'axios'
const AddMenu = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [property, setProperty] = useState(null)
    async function getData() {
        const res = await axios("http://localhost:3000/datas")
        setData(res.data)
    }
    async function deleteData(id) {
        const res = await axios.delete(`http://localhost:3000/datas/${id}`)
        getData()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Formikk getData={getData} />
            <div className="filter">
                <input type="search" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => setProperty({ name: "text", asc: null })}>default</button>
                <button onClick={() => setProperty({ name: "text", asc: true })}>A-Z</button>
                <button onClick={() => setProperty({ name: "text", asc: false })}>Z-A</button>
                <button onClick={() => setProperty({ name: "price", asc: true })}>inc</button>
                <button onClick={() => setProperty({ name: "price", asc: false })}>dec</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Text</td>
                        <td>ImageTwo</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data
                        .filter(x => x.text.toLowerCase().includes(search.toLowerCase()))
                        .sort((a, b) => {
                            if (property && property.asc === true) {
                                return (a[property.name] < b[property.name]) ? -1 : ((b[property.name] < a[property.name]) ? -1 : 0)
                            } else if (property && property.asc === false) {
                                return (a[property.name] > b[property.name]) ? -1 : ((b[property.name] > a[property.name]) ? -1 : 0)
                            } else {
                                return 0;
                            }
                        })




                        .map(x =>
                            <tr>
                                <td><img src={x.image} alt="" /></td>
                                <td>{x.text}</td>
                                <td>{x.imagetwo}</td>
                                <td>{x.price}</td>
                                <td><button onClick={() => deleteData(x._id)}>delete</button></td>
                            </tr>

                        )}
                </tbody>
            </table>
        </>
    )
}

export default AddMenu
