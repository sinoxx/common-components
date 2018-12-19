import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

/**
 * 这里可以对组件进行简单介绍
 *
 * @visibleName 搜索框
 */
export default function SearchInput({ placeholder }) {
  return <Input placeholder={placeholder} />;
}

SearchInput.propTypes = {
  /** 搜索提示文案 */
  placeholder: PropTypes.string.isRequired,
};
