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

  // let chars = '!<>-_\\/[]{}—=+*^?#________';
  let chars = '!<>-_\\/[          #________';
  let resolved: any;
  let queue: any[] = [];
  let frameRequest: number;
  let frame = 0; //
  const phrases = [
    'Neo,', // 3
    'sooner or later', // 15
    'you\'re going to realize', // 23
    'just as I did', // 13
    'that there\'s a difference', // 25
    'between knowing the path', // 24
    'and walking the path' // 20
  ];
  let counter = 0;

  useEffect(() => {
    next();
    // eslint-disable-next-line
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
    let content   = (elRef.current && elRef.current.innerText) || ''; // получает текущий отображенный текст
    const length  = Math.max(content.length, newText.length);         // устанавливает максимальную длину
    const promise = new Promise((resolve, _reject) => resolved = resolve );    // показывает resolved наружу
    queue = []; // сброс очереди символов

    for (let i = 0; i < length; i++) {
      const from   = content[i] || '';
      const to     = newText[i] || '';
      const start  = Math.floor(Math.random() * 40);          // start и end – это рандомный промежуток
      const end    = start + Math.floor(Math.random() * 40);  // между 0 и 80, например [0,2], [10,25], [40, 80]
      queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequest);
    frame = 0; // сброс фрейма на 0
    update();
    return promise;
  }

  // отрисовка фрейма (кадра) на базе queue
  // каждый вызов пробегается по queue и, при необходимости, добавляет char в queue[i]
  // при этом остальные поля остаются статичными
  const update = () => {
    let output = '';  // базовое значение текста
    let complete = 0; // счетчик. максимальное значение = queue.length

    // в этом цикле генерируется строка, которая будет отображаться в текущем фрейме.
    // в зависимости от того, длина (в символах) какого фрейма больше, текст "вырастает" или "уменьшается"
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
        // TODO: move class or styles to component scope. Now you can find class definition in the addons.scss
        output += `<span class="dud">${char}</span>`;
        // output += `${char}`;

      } else {
        output += from;
      }
    }

    // положить новый текст в DOM
    if (elRef.current) {
      elRef.current.innerHTML = output;
    }

    // Если прошлись по всему queue, то пора заканчивать если нет, то идем дальше.
    complete === queue.length ? resolved()
      : frameRequest = requestAnimationFrame(update);
        frame++;

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