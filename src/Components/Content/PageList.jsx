import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './style/pageListStyle'

export default function PaginationButtons({ filter, length, page, setPage }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(length / filter)}
        onChange={(_, page) => setPage(page)}
        page={page}
        shape="rounded"
        showFirstButton
        showLastButton>
      </Pagination>
    </div>
  );
}