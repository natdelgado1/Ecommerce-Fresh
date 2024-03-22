"use client"
import {  imagesURL } from "@/config";
import Link, { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const CardMarca = ({marca}) => {
    const router = useRouter();
    
    const MarcaPage = () =>{
        router.push(`/store/marcas/${marca}`)
    }

    return(
        <div >
            <div onClick={() => MarcaPage()}>
            <img  className="border-2 border-black rounded-md "
                    src={`${imagesURL}/marcas/${marca.toLowerCase()}.png`} 
                    alt={`${marca}`} 
                    />
            </div>
        </div>
    )
}
export default CardMarca;