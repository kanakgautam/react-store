import React ,{useState} from 'react'
import './Store.css'
import shoeArray from './shoeArray'
import Shoes from './Shoes'
function Store() {

    const [inputNumber, setInputNumber] = useState(10000);
    const [finalNumber, setFinalNumber]=useState(10000);
    const [type,setType]=useState('all')
    const handleChange = (event) => {
        const newNumber = event.target.value;
        setInputNumber(newNumber);
        console.log(inputNumber)

    }
    const applyChanges = () =>{
        setFinalNumber(inputNumber);  
    }

    const chooseType = (event) =>{
        setType(event.target.id);
    }

    return (
        <div className='store-container'>
            <div className='filter-section'>
                <div className='filter-heading'>
                    FILTERS  <i class="fas fa-filter"></i>
                </div>
                <div className='filter-cost'>
                    Cost
                    <div className="slide-container">
                        <input type="range" min="1" max="10000" value={inputNumber} className="slider" onChange={handleChange} />
                        <p className='slider-text'>Price: Rs <span className='slider-val'>{inputNumber}</span></p>
                    </div>
                </div>
                <div className='filter-colour'>
                    Colour
                    <div className='filter-colour-colours'>
                        <button className='colour-btn1'></button>
                        <button className='colour-btn2'></button>
                        <button className='colour-btn3'></button>
                        <button className='colour-btn4'></button>
                        <button className='colour-btn5'></button>
                    </div>
                </div>
                <div className='filter-design-template'>
                    Design Templates
                    <div className='design-checkbox'>
                        <input type='checkbox' /> 2
                    </div>
                    <div className='design-checkbox'>
                        <input type='checkbox' /> 3
                    </div>
                    <div className='design-checkbox'>
                        <input type='checkbox' /> 3+
                    </div>
                </div>
                <div className='filter-type'>
                    Type
                    <div className='type-checkbox'>
                        <input type='checkbox' val={type} id ='loafers' onClick={chooseType}  checked={type==='loafers'}/> Loafers
                    </div>
                    <div className='type-checkbox'>
                        <input type='checkbox' val={type} id='sneakers' onClick={chooseType} checked={type==='sneakers'} /> Sneakers
                    </div>
                    <div className='type-checkbox'>
                        <input type='checkbox' val={type} id='all' onClick={chooseType} checked={type==='all'}/> All
                    </div>
                </div>
                <div className='filter-apply'>
                    <button className='apply-btn' onClick={applyChanges}>apply</button>
                </div>
            </div>
            <div className='shoes-section'>
                <div className='shoes-heading'>
                    <div>
                        SHOES
                    </div>
                    <div>
                        <i class="fas fa-search"></i>
                        <button className='sort-btn'>sort by</button>
                    </div>
                </div>
                <div className='shoe-container'>
                    {shoeArray.map((item,index)=>{
                        if(finalNumber>=item.price && (type==='all' || type===item.type))
                        {
                            
                            return(
                            <Shoes src={item.src} name={item.name} price={item.price} />
                        )
                        }
                    })}
                </div>
            </div>
            <div className='cart-section'>
            <div className='cart-heading'>
                    CART <i class="fas fa-shopping-cart"></i>
            </div>
            <p>What's stopping you designer?</p>
            <div className='cart-details'>
                <i class="fas fa-map-marker-alt"></i> Home <i class="fas fa-calendar-minus"></i> Select date
                <div>
                <button className='cart-btn'>Order Now</button>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default Store
