import React from 'react';
import { Box, Card, CardContent, CardHeader, Avatar, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ClientCard = ({ client }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <Card sx={{ mb: 2, overflow: 'visible', boxShadow: expanded ? 5 : 1, backgroundColor: expanded ? '#e8f5e9' : '#fff' }}>
      <CardHeader
        avatar={<Avatar src={client.image} sx={{ width: 56, height: 56, display: expanded ? 'flex' : 'none' }} />}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={client.name}
        sx={{ pb: expanded ? 0 : 2 }}
        titleTypographyProps={{
          variant: 'subtitle1',
          component: 'div'
        }}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {`${client.sex}, ${client.age}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {client.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const ClientList = ({ clients }) => {
  return (
    <Box sx={{ maxWidth: 400, m: 'auto' }}>
      {clients.map(client => (
        <ClientCard key={client.name} client={client} />
      ))}
    </Box>
  );
};

export default ClientList;
