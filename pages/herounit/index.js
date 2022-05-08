import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import Link from 'next/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const cards = [1,2,3];
 const theme = createTheme();
 const onClick = e => {
   e.preventDefault()
   alert('테이블 정보: '+JSON.stringify(Table))
 
   window.location.href='/herounit'
 }
export function Herounit(){
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
        </AppBar>
        
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
            What is your favorite Artist & Album?
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Button Link href="artist/artilist" variant="contained">My favorite Artist</Button>
              <Button Link href="album/albumlist" variant="outlined">My favorite Album</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Introduction
                    </Typography>
                    <Typography>
                    Currently, Korea is producing various K-pop artists. The world is paying attention to K-pop artists whose individuality stands out.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button Link href="album/samplealbum" size="small">Album</Button>
                    <Button Link href="album/design" size="small">Search</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </ThemeProvider>
        
        
    )
}