import { Box } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/DialogTitle/DialogTitle'

export default function Login() {
  return (
    <>
        <Box>
            <h1>Login</h1>
            <Box>
                <TextField id="outlined-basic" label="Correo" variant="outlined" />
                
            </Box>
        </Box>
    </>
  )
}
