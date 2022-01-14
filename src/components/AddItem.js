import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { additem } from '../redux/actions/index';


const AddItem = () => {
    const [inputItem, setInputItem] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list)

    return (
        <div className='container my-3'>
            <div className='container my-3'>
                <h1>Todo List</h1>
                <input type="text" placeholder='add item here..' value={inputItem}
                    onChange={(event) => { setInputItem(event.target.value) }} />
                <button className='btn btn-primary mx-3' onClick={() => { dispatch(additem(inputItem), setInputItem('')) }}>Add</button>
            </div>
            <div className='container my-3'>
                {

                    list.map((element) => {
                        return (
                            <div key={element.id}>
                                <h3>{element.data}</h3>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AddItem
