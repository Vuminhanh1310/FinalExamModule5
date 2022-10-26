import {
    Alert, Box, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Paper,

    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


function CreateProduct() {
    const [mess, setMess] = useState({
        status: '', mess: '',
    });
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const id = useLocation()
    console.log(id)

    const handleChange = (e) => {
        setProduct({...product, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock,
            description: product.description

        }
        await axios.post('http://localhost:3001/products', data).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message);
        })
        navigate('/products');
    }
    return (
        <>
            <Grid container item>
                <Grid item xs></Grid>
                <Grid item xs={5}>
                    <Paper elevation={3} sx={{padding: 2, marginTop: 10}}>
                        {mess && mess.status === 'error' ? <Alert severity='error'>{mess.mess}</Alert> : ''}
                        {mess && mess.status === 'success' ? <Alert severity='success'>{mess.mess}</Alert> : ''}
                        {mess && mess.status === 'navigate' ? <Alert severity='info'>{mess.mess}</Alert> : ''}
                        <Box component='form' sx={{
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
                        }}
                             onSubmit={handleSubmit}
                        >
                            <h2 style={{textAlign: 'center'}}>Create a new product</h2>
                            <div style={{textAlign: 'center'}}>
                                <TextField
                                    label='ID Product'
                                    required
                                    type='number'
                                    maxRows={6}
                                    name="id"
                                    onChange={handleChange}
                                />
                                <TextField
                                    label='Name Product'
                                    required
                                    type='text'
                                    maxRows={6}
                                    name="name"
                                    onChange={handleChange}
                                />
                                <TextField
                                    label='Price'
                                    required
                                    type='number'
                                    maxRows={6}
                                    name="price"
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{textAlign: 'center'}}>

                                <FormControl
                                    fullWidth sx={{m: 1}}
                                    item xs={5}
                                >
                                    <InputLabel
                                        htmlFor="outlined-adornment-amount">Description</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="Amount"
                                        name='description'
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </div>

                            <div style={{textAlign: 'left'}}>
                                <TextField
                                    label='Stock'
                                    required
                                    maxRows={4}
                                    type='number'
                                    name="stock"
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Button variant='contained' color='success'
                                        sx={{marginTop: 1, alignItems: 'center'}} type='submit'
                                >
                                    Submit
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='success'
                                    sx={{marginTop: 1, alignItems: 'center'}}
                                    onClick={() => { navigate('/')}}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </>
    )

}

export default CreateProduct;