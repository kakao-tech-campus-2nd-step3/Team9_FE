import styled from '@emotion/styled';

import CancelIcon from '@/assets/icons/cancel-filled-gray.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import IconButton from '@/components/common/IconButton';
import { HEADER_HEIGHT } from '../Header';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SEARCH_PLACEHOLDER = '작품/작가 외 검색은 #을 붙여주세요';

interface SearchBarProps {
  includeFavorite?: boolean;
  goBack?: () => void;
}

const SearchBar = ({ includeFavorite = false, goBack }: SearchBarProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, formState } = useForm<{ searchWord: string }>({
    defaultValues: {
      searchWord: '',
    },
    mode: 'onSubmit',
  });

  const handleRemoveSearchWord = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue('searchWord', '');
  };

  const activeEnter = (data: { searchWord: string }) => {
    const { searchWord } = data;
    const storedData = localStorage.getItem('searchArray');
    const searchArray = storedData ? JSON.parse(storedData) : [];
    const updatedArray = [searchWord, ...searchArray];
    localStorage.setItem('searchArray', JSON.stringify(updatedArray));
    navigate(`/results?query=${searchWord}`);
  };

  const nowSearchWord = watch('searchWord');

  return (
    <SearchBarWrapper>
      <IconButton icon="arrow-back" onClick={goBack} />
      <InputBox onSubmit={handleSubmit(activeEnter)}>
        <StyledSearchIcon />
        <Input
          type="text"
          placeholder={SEARCH_PLACEHOLDER}
          {...register('searchWord', {
            validate: (value) => value.trim() !== '' || '공백만 입력할 수 없습니다.',
          })}
        />
        {nowSearchWord.trim().length > 0 && <CancelIconButton onClick={handleRemoveSearchWord} />}
      </InputBox>
      {formState.errors.searchWord && (
        <ErrorMessage>{formState.errors.searchWord.message}</ErrorMessage>
      )}
      {includeFavorite && <IconButton icon="favorite-default" />}
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SEARCHBAR_HEIGHT = HEADER_HEIGHT;

const SearchBarWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${SEARCHBAR_HEIGHT};
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const InputBox = styled.form`
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  flex: 1 0 0;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-gray-md);
  font-size: var(--font-size-sm);
  cursor: text;
`;

const Input = styled.input`
  width: 100%;
  align-self: stretch;
  margin: 0 30px 0 34px;
  outline: none;
  border: none;

  &::placeholder {
    color: var(--color-gray-dk);
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 8px;
  cursor: pointer;
`;

const CancelIconButton = styled(CancelIcon)`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 8px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red; /* 오류 메시지 색상 설정 */
  font-size: var(--font-size-sm);
  margin-top: 4px; /* 입력 필드와 오류 메시지 간의 간격 설정 */
`;
