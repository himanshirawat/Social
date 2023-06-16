import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar,Typography,Grid } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import baseURL from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  gridList: {
    width: 500,
    height: 220,
  },
  tileText: {
    textAlign: 'center',
    marginTop: 10,
  },
}));
export default function FollowGrid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid List cellHeight={160} className={classes.gridList} cols={4}>
        {props.people.map((person, i) => {
          return (
            <Grid ListTile style={{ height: 120 }} key={i}>
              <Link to={'/user/' + person._id}>
                <Avatar src={baseURL + '/api/users/photo/' + person._id} className={classes.bigAvatar} />
                <Typography className={classes.tileText}>{person.name}</Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

FollowGrid.propTypes = {
  people: PropTypes.array.isRequired,
};