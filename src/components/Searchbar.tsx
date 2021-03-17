import React, { FC, ReactElement, ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface ISearchbarProps {
    searchTerm: string;
    clear: () => void;
    change: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchbarWrapper = styled.div`
    margin-top: 1em;
    display: flex;
    border-radius: 6px;
    align-items: center;
    background: white;
    -webkit-box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.41);
    box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.41);
`;
const Input = styled.input`
    padding: 6px 6px;
    outline: none;
    border-radius: 6px;
    background: transparent;
    border: transparent;
    color: ${(p) => p.theme.colors.main};
    font-size: 16px;
    width: 100%;
`;

const ClearInputButton = styled.p`
    /* color: ${(p) => p.theme.colors.main}; */
    color: white;
    font-size: 20px;
    margin-left: auto;
    margin-right: 6px;
    font-weight: 400;
    height: 40px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    width: 100px;
    margin: 0;
    padding-top: 10px;
    text-align: center;
    vertical-align: center;
    background: ${(p) => p.theme.colors.secondary};
    &::before {
        content: '✖';
        font-size: 20px;
        margin-left: 4px;
        transition-duration: 0.2s;
    }
    @media (min-width: 800px) {
        &:hover {
            cursor: pointer;
            &::before {
                content: 'clear';
                font-size: 18px;
                margin-left: 4px;
                transition-duration: 0.2s;
            }
        }
    }
`;

const Searchbar: FC<ISearchbarProps> = ({ searchTerm, clear, change }): ReactElement => {
    const [isFocused, setFocused] = useState(false);

    return (
        <SearchbarWrapper>
            <Input
                value={searchTerm}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => change(e)}
                placeholder={isFocused ? '' : 'Search movie titles'}
            />
            <ClearInputButton onClick={clear}></ClearInputButton>
        </SearchbarWrapper>
    );
};

export default Searchbar;
