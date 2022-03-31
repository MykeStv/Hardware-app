import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {

    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)

    const handleChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200) //debounce in ms

    return (
        <div className='search'>
            <span className='text'>Search: </span>
            <input
                className='input'
                type="text"
                value={value || ''}
                onChange={e => {
                    setValue(e.target.value)
                    handleChange(e.target.value)
                }}
                placeholder={`${count} records...`}
            />
        </div>
    )
}

export default GlobalFilter