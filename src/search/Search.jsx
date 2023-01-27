import React, {useState, useEffect} from 'react'
import { Fragment } from 'react'
import {Input, Container} from 'reactstrap';
import { convertLanguage } from '../JS/convertLanguage';
import './search.scss'
import axios from 'axios'


const Search = ({onData}) => {
    const [searchValue, setSearchValue] = useState('')
    
    const [data, setData] = useState([])
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const hanldeCLick = (name) => {
       onData(name)
       setSearchValue('')
    }


    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('https://provinces.open-api.vn/api/p/');
            setData(res.data)
        }
        fetchData()
    }, [])
    
  return (
    
    <Fragment>
        <Container>
            <div className="search__box">
                <Input className='' placeholder='Enter your search ...' value={searchValue} onChange={e => handleSearch(e)}/> 
                {searchValue && 
                <ul>
                    {data.filter(item => item.name.includes(searchValue)).map(item => (
                        <li key={item.code} onClick={() => hanldeCLick(item.name)}>{item.name}</li>
                    ))}
                    
                </ul>}
                
            </div>

        </Container>
     
    </Fragment>
  )
}

export default Search