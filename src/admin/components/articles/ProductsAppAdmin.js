import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../features/articleSlice";
import AfficheArticleTable from './AfficheArticleTable';


const ProductsAppAdmin = () => {

const dispatch = useDispatch();

useEffect(() => {

dispatch(getArticles());

},[])

return (

<div>
    <AfficheArticleTable />
</div>

)
}
export default ProductsAppAdmin