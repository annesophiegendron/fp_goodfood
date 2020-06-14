import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import GridListTileBar from '@material-ui/core/GridListTileBar'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'

import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import IconButton from '@material-ui/core/IconButton'

import { deleteFavourite } from "../fetch_data/favourites"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 300,
    height: 300,
  },
}))

export const ImageGridList = ({favourites}) => {
  const classes = useStyles();
  const fav = favourites.map(favourite => {
    return (
      <div className={classes.root}>
        <GridList cellHeight={250} cellWidth={80} className={classes.gridList} cols={1}>
        
            <GridListTile key={favourite.image} cols={favourite.cols || 1} >
              <img src={favourite.image} alt={favourite.title} />
            
            <GridListTileBar
              title={favourite.title}
              actionIcon={
                <IconButton aria-label={`remove ${favourite.title}`} className={classes.icon} onClick={() => deleteFavourite(favourite._id)}>
                  <DeleteIcon />
                </IconButton>
              }
            />
          </GridListTile>
          )}
        </GridList>
      </div>
    )
  })
  return <>{fav}</>
}

