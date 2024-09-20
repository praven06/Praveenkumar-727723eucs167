import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';

export default function Day4CY() {
  // List of books with title and summary
  const books = [
    {
      title: 'The Republic by Plato',
      summary:
        'A Socratic dialogue, written around 375 BC, that explores justice, the order and character of the just city-state, and the just man.'
    },
    {
      title: 'The Bible',
      summary:
        'A collection of religious texts that has profoundly influenced Western civilization and is considered a foundation for both Judaism and Christianity.'
    },
    {
      title: 'The Origin of Species by Charles Darwin',
      summary:
        'Published in 1859, this work introduced the scientific theory that populations evolve over time through the process of natural selection.'
    },
    {
      title: 'The Communist Manifesto by Karl Marx and Friedrich Engels',
      summary:
        'This 1848 political pamphlet lays out the theory of historical materialism and advocates for the overthrow of capitalist societies in favor of communism.'
    },
    {
      title: 'The Divine Comedy by Dante Alighieri',
      summary:
        'An epic poem from the 14th century that depicts Dante’s journey through Hell, Purgatory, and Heaven, symbolizing the soul’s journey toward God.'
    }
  ];

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Most Influential Books of All Time
      </Typography>

      <List>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={<Typography variant="h6">{book.title}</Typography>}
                secondary={<Typography variant="body2">{book.summary}</Typography>}
              />
            </ListItem>
            {/* Show Divider after each item except the last one */}
            {index < books.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
