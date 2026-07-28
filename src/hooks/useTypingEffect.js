import { useState, useEffect } from 'react';

/**
 * Custom hook to create a typewriter typing and erasing effect.
 * @param {string[]} words - Array of words to type out sequentially.
 * @param {number} typeSpeed - Delay between typing letters (ms).
 * @param {number} eraseSpeed - Delay between erasing letters (ms).
 * @param {number} delayBetween - Pause duration when word is fully typed (ms).
 * @returns {string} - The currently typed snippet of text.
 */
export const useTypingEffect = (words, typeSpeed = 100, eraseSpeed = 50, delayBetween = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let timer;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing mode
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        // Fully typed, pause, then switch to deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      // Deleting mode
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }, eraseSpeed);
      } else {
        // Completely deleted, move to the next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, eraseSpeed, delayBetween]);

  return currentText;
};
