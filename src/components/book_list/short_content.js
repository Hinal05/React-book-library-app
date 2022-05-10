import React from 'react';

function ShortShow(shortContent) {
  const MAX_LENGTH = 100;
  const bookContent = shortContent.shortContent;
  const bookContentLength = shortContent.shortContent.length;
  if (bookContentLength >= MAX_LENGTH) {
    return <p>{bookContent.substring(0, MAX_LENGTH) + '...'}</p>
  }
}

export default (ShortShow);