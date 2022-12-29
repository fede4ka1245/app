import React, { useCallback, useEffect, useState } from 'react';
import styles from './Topic.module.scss';
import { Typography } from '@mui/material';
import TopicModal from './components/TopicModal';
import Tags from './components/Tags';

interface TopicProps {
  name: string,
  discussions: number,
  tags?: Array<string>,
}

const Topic = ({ name, discussions, tags }: TopicProps) => {
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
  const [targetTag, setTargetTag] = useState('');

  const toggleModal = useCallback(() => {
    setIsTopicModalOpen(!isTopicModalOpen);
  }, [isTopicModalOpen]);

  const onTopicClick = useCallback(() => {
    setIsTopicModalOpen(true);
  }, []);

  useEffect(() => {
    if (targetTag === '') {
      return;
    }

    setIsTopicModalOpen(true);
  }, [targetTag]);

  return (
    <div>
      <TopicModal targetTag={targetTag} setTargetTag={setTargetTag} isOpen={isTopicModalOpen} close={toggleModal} name={name} tags={tags} />
      <div className={styles.main} onClick={onTopicClick}>
        <Typography pl={2} className={styles.name} fontFamily={'Gilroy'}>
          {name}
        </Typography>
        <Typography whiteSpace={'nowrap'} ml={'auto'} pr={2} className={styles.discussions} fontSize={'10px'}>
          {discussions} обсуждений
        </Typography>
      </div>
      <Tags tags={tags} targetTag={targetTag} setTargetTag={setTargetTag}/>
    </div>
  );
};

export default Topic;
