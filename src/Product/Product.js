import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function Product({ product, onAddToCart }) {
  const classes = useStyles();
  //dangerouslySetInnerHTML--> React alternative zu innerHtml im browser DOM.
  //da es als riskant (cross site scripting--> hacker fügen scripte hinzu) gilt hmtl durch react zu setzen, muss dangerouslysetInnerhtml verwendet werden.
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name}></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />

      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>

      </CardActions>
    </Card>

  );
}

export default Product;
