import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import { BiSearch } from "react-icons/bi";


const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)

    const handleChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200) //debounce in ms

    return (
        <div className='search'>
            <span className='text'>Buscar</span>
            <input

                className='input'
                type="text"
                value={value || ''}
                onChange={e => {
                    setValue(e.target.value)
                    handleChange(e.target.value)
                }}
                placeholder={`${count} items...`}
            />
        </div>
    )
}

export default GlobalFilter