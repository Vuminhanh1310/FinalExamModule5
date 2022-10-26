import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";

function ProductDetails () {

    const productId = useParams().id;

    console.log(productId)

    let URL = "http://localhost:3001/products/" + productId;

    console.log(URL)

    const [ product, setProduct ] = useState(null);

    useEffect( () => {
        axios.get(URL)
            .then((res) => { setProduct(res.data)})
    }, [productId]);

    const ShowProductList = () => {
        window.location.href = "products"
    };

    if( !product ) return null;

    return(
        <div>
            <table >
                <thead>
                <tr>
                    <th colSpan={2}><h2>Chi tiết sản phẩm</h2></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>{product.name}</th>
                </tr>
                <tr>
                    <th>Giá sản phẩm (VNĐ)</th>
                    <th>{product.price}</th>
                </tr>
                <tr>
                    <th>Tồn kho</th>
                    <th>{product.stock}</th>
                </tr>
                <tr>
                    <th>Mô tả</th>
                    <th>{product.description}</th>
                </tr>

                </tbody>
            </table>
            <div className="center mt-5">
                <Button variant="contained" >
                <a href="/products" >Danh sách</a>
                </Button>
            </div>
        </div>
    )
}

export default ProductDetails;
