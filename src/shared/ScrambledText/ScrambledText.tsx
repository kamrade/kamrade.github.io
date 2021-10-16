import React, {useRef, useEffect} from 'react';
import s from './ScrambledText.module.scss';

interface ScrambledTextProps {
  value: string;
}

export const ScrambledText: React.FC<ScrambledTextProps> = ({value}) => {

  /*
  // oldText = content
  // this.resolve = resolved
  // this.frame = frame
  // this.queue = queue
   */

  const elRef = useRef<HTMLDivElement>(null);

  let chars = '!<>-_\\/[]{}—=+*^?#________';
  let resolved: any;
  let queue: any[] = [];
  let frameRequest: number;
  let frame = 0;
  const phrases = [
    'Neo,',
    'sooner or later',
    'you\'re going to realize',
    'just as I did',
    'that there\'s a difference',
    'between knowing the path',
    'and walking the path'
  ];
  let counter = 0;

  useEffect(() => {
    next();
  }, []);

  // рисует одну фразу в цикле, увеличивает counter, когда counter достигает максимума — сбрасывает counter на 0
  const next = () => {
    setText(phrases[counter])
      .then(() => {
        setTimeout(next, 2000);
      });
    counter = (counter + 1) % phrases.length;
  }

  // устанавливает текст
  const setText = (newText: string) => {
    let content   = (elRef.current && elRef.current.innerText) || ''; // получает текущий текст
    const length  = Math.max(content.length, newText.length);       // устанавливает максимальную длину
    const promise = new Promise((resolve) => resolved = resolve );  // зачем-то создает промис...
    queue = [];

    for (let i = 0; i < length; i++) {
      const from   = content[i] || '';
      const to     = newText[i] || '';
      const start  = Math.floor(Math.random() * 40);
      const end    = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequest);
    frame = 0;
    update();
    return promise;
  }

  // анимирует переход текста
  const update = () => {
    let output = '';
    let complete = 0;

    for (let i = 0, n = queue.length; i < n; i++) {
      let {from, to, start, end, char} = queue[i];

      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {

        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue[i].char = char;
        }
        // output += {`<span class="dud">${char}</span>`;
        output += '<span class="dud">' + char + '</span>';
        // output += char;

      } else {
        output += from;
      }
    }

    if (elRef.current) {
      elRef.current.innerHTML = output;
    }

    if (complete === queue.length) {
      resolved();
    } else {
      frameRequest = requestAnimationFrame(update);
      frame++;
    }

  }

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  return (
    <div className={s.ScrambledTextContainer}>
      <div ref={elRef} className={s.ScrambledText}>

      </div>
    </div>
  );
}