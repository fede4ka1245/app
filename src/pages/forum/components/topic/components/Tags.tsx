import React, { useCallback } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import styles from '../Topic.module.scss';

interface TopicTagsProps {
  tags?: Array<string>,
  targetTag?: string,
  setTargetTag?: (props?: any) => any
}

const Tags = ({ tags, targetTag, setTargetTag }: TopicTagsProps) => {
  const onTagClick = useCallback((tag: string) => {
    if (!setTargetTag) {
      return;
    }

    setTargetTag(tag);
  }, [setTargetTag]);

  return (
    <>
      {tags && tags?.length !== 0 && <Grid container pt={2} direction={'row'} display={'flex'}>
        <Grid item pr={2}>
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5361 7.17269L16.9361 7.71814L18.9543 9.98178H10.8271C6.0816 9.98178 2.23615 6.13632 2.23615 1.39087H1.41797C1.41797 6.59996 5.64524 10.8 10.8543 10.8272H18.9543L16.9089 13.0636L17.5089 13.6091L20.3998 10.3636L17.5361 7.17269Z"
              fill={!targetTag ? '#37366B' : 'gray'}
            />
          </svg>
        </Grid>
        <Grid container item flex={1}>
          {tags.map((tag) => (
            <Grid item key={tag}>
              <Button onClick={() => onTagClick(tag)}>
                <Typography color={!targetTag ? '#37366B' : tag === targetTag ? '#37366B' : 'gray'} textTransform={'none'} className={styles.tag}>
                  {tag}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>}
    </>
  );
};

export default Tags;
