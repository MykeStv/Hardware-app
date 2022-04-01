import React from 'react'

const Search = () => {

    const handleSearch = () => {

    }

    return (
        <div className='search'>
            <form >
                <input
                    className='input'
                    type="text"
                    placeholder='Buscar producto por id 🔎'
                    onChange={handleSearch}
                />
            </form>
        </div>
    )

}

export default Search