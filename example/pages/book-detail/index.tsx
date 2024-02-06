import React, { useEffect } from 'react';
import './index.scss';
import { NavLink, useParams } from 'react-router-dom';

function BookDetail() {
  const params = useParams();
  const { id } = params; // abc
  return id ? <div className="book-detail">{`书本内容是...${id}`}</div> : <div>当前未选择图书</div>;
}

export default BookDetail;
