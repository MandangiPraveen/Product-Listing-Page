import React, { useState, useEffect } from 'react'
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductList from './ProductList';
import Categories from './Categories';
import basicOps from './utility/basicOps';
import { usePaginationContext } from './utility/PaginationContext';



function Home() {
    const [searchTerm,setSearchTerm] = useState("");
    const [products,setProducts] = useState([]);
    const [sortDir,setSortDir] = useState(0);
    const [categories,setCategories] = useState([]);
    const [currCategory,setCurrCategory] = useState("All Categories")

    
    const { pageSize,pageNum,
        setPageNum,
        setPageSize } = usePaginationContext();
    
    
    useEffect(()=>{
        (async function (){
            const resp = await fetch('https://fakestoreapi.com/products');
            const productData = await resp.json();
            setProducts(productData);
        })()
    },[]);

    useEffect(()=>{
        (async function(){
            const resp = await fetch('https://fakestoreapi.com/products/categories');
            const categoriesData = await resp.json();
            //console.log(categoriesData);
            setCategories(categoriesData);
        })()
    },[]);

    const object = basicOps(products, searchTerm, sortDir, currCategory, pageNum, pageSize);
    const filteredSortedgroupByArr = object.filteredSortedgroupByArr;
    const totalPages = object.totalPages;

  return (
    <>
        <header className="nav_wrapper">
            <div className="search_sortWrapper">
                <input
                    className="search_input"
                    type='text'
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)
                        setPageNum(1);
                    }}
                />
                <div className='icons_container'>
                <FaCircleArrowUp className='icons_container1' style={{color:"white"}} fontSize="large" 
                onClick={()=>{setSortDir(1)
                    setPageNum(1);
                }}></FaCircleArrowUp>
                
                <FaCircleArrowDown className='icons_container1' style={{color:"white"}}fontSize="large" 
                onClick={()=>{setSortDir(-1)
                    setPageNum(1);
                }}></FaCircleArrowDown>
                </div>
            </div>

            <div className="catagories_wrapper">
                <Categories categories={categories}
                            setCurrCategory={setCurrCategory}
                            setPageNum={setPageNum}></Categories>
            </div>
            
        </header>
        <main className="product_wrapper">
            <ProductList productList={filteredSortedgroupByArr}></ProductList>
        </main>

        <div className='pagination'>
            <button onClick={()=>{
                if(pageNum == 1)
                    return 
                setPageNum((pageNum)=> pageNum - 1);
            }}
            disabled={pageNum == 1 ? true : false}
            >
                <MdKeyboardArrowLeft fontSize="large"></MdKeyboardArrowLeft>
            </button>
            <div className='pagenum'>
                {pageNum}
            </div>
            <button onClick={()=>{
                if (pageNum == totalPages)
                    return 
                setPageNum((pageNum)=>pageNum + 1)
                
            }}
            disabled = {pageNum == totalPages ? true : false}
            >
                <MdKeyboardArrowRight fontSize="large"></MdKeyboardArrowRight>
            </button>

        </div>
    </>
  )
}

export default Home