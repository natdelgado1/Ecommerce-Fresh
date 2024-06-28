"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/config";
import Product from "@/components/Product/Product";

export default function ProductPage(){
    const {id} = useParams();
    const [product, setProduct] = useState({});


    const handleGetProduct = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products/${id}`);
            const result = await response.data
            setProduct(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetProduct();
      },[])



    return (
        <div className="w-full">
           
               <div className=" flex justify-center">
                {
                    product &&
                    <Product product={product}/>
                }
               </div>
            </div>
    );
}