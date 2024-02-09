  import React, { useState, useEffect } from 'react'; // Adicione esta linha
    import Container from '@mui/material/Container';
  import Typography from '@mui/material/Typography';
  import AddIcon from '@mui/icons-material/Add';
  import IconButton from '@mui/material/IconButton';
  import ClientList from './components/ClientCard';
  import { Box } from '@mui/material';

  import axios from 'axios';

  function App() {
    const [clients, setClients]   = useState([]);

    useEffect(() => {
      // Substitua 'localhost:3001' pelo endereço do seu servidor
      axios.get('http://localhost:3001/clients')
        .then(response => {
          setClients(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the clients', error);
        });
    }, []);

    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Your clients
            <IconButton color="primary" aria-label="add client" sx={{ padding: '0', margin: '0 16px' }}>
            <AddIcon />
          </IconButton> 
          </Typography>

        </Box>
        <ClientList clients={clients} />
      </Container>
    );
  }


  export default App;