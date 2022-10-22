import React, { useCallback } from 'react';
import styles from './Topic.module.scss';
import { Grid, Typography } from '@mui/material';
import arrow from './assets/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../models/enums/routes';

interface TopicProps {
  name: string,
  discussions: number,
  tags?: Array<string>
}

const Topic = ({ name, discussions, tags }: TopicProps) => {
  const navigate = useNavigate();

  const onTopicClick = useCallback(() => {
    navigate(routes.forumItem);
  }, [navigate]);

  return (
    <div onClick={onTopicClick}>
      <div className={styles.main}>
        <Typography pl={2} className={styles.name} fontFamily={'Gilroy'}>
          {name}
        </Typography>
        <Typography whiteSpace={'nowrap'} ml={'auto'} pr={2} className={styles.discussions} fontSize={'10px'}>
          {discussions} обсуждений
        </Typography>
      </div>
      {tags && tags?.length !== 0 && <Grid container pt={2} direction={'row'} display={'flex'}>
        <Grid item pr={2}>
          <img src={arrow} width={30} height={30}/>
        </Grid>
        <Grid container item flex={1}>
          {tags.map((tag) => (
            <Grid item key={tag}>
              <Typography className={styles.tag}>
                {tag}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>}
    </div>
  );
};

export default Topic;
