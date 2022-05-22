import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import styles from '../Emojis/Emojis.module.css';

const Emojis = ({ setTweet }: any) => {
  const [chosenEmoji, setChosenEmoji] = useState<any>(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const handleShowEmoji = () => {
    setShowEmoji(!showEmoji);
  };

  const onEmojiClick = (e: any, emojiObject: any) => {
    const tweet: any = document.getElementById('tweet');
    setTweet((prev: any) => ({
      ...prev,
      ['tweet']: (prev.tweet += emojiObject.emoji),
    }));
  };

  return (
    <div>
      <button className={styles.buttonIcon} onClick={handleShowEmoji}>
        ICONO
      </button>

      {showEmoji === false ? null : <Picker onEmojiClick={onEmojiClick} />}
    </div>
  );
};

export default Emojis;
