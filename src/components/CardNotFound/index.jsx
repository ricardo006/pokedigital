import React from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';

const CardNotFound = () => {
    return (
        <Container>
            <Card
                sx={{
                    padding: '20px',
                    backgroundColor: '#0d1b2a',
                    border: 0,
                    boxShadow: 'none',
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            color: '#cbf3f0',
                        }}
                    >
                        Nenhum pokémon encontrado.
                        <img
                            src="/images/search.svg"
                            alt="Nenhum resultado encontrado."
                            style={{
                                margin: '20px auto',
                                backgroundColor: '#b2f7ef',
                                width: 180,
                                height: 180,
                                display: 'block',
                                borderRadius: 20,
                            }}
                        />
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CardNotFound;
