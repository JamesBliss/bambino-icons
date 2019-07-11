import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 14px;
  display: flex;


  ${ ({ isInline }) => (isInline ? `
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  ` : `
    flex-direction: column;
  `) }

  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;

export const Label = styled.label`
  display: block;
  letter-spacing: normal;
  text-transform: none;
  color: #333;
  font-weight: 500;
  text-align: left;
  padding: 0;
  font-size: 0.88em;
  line-height: 1.91;

  span {
    color: #8f8f8f;
    font-style: italic;
    font-weight: 400;
  }

  ${ ({ isInline }) => (isInline ? `
    margin: 0 1em 0 0;

    span {
      display: block;
    }

  ` : `
    margin: 0 0 0.1em;

    span {
      &:before {
        content: ' - ';
        display: inline-block;
        padding: 0 0.2em;
      }
    }
  `) }
`;

export const Error = styled.span`
  display: block;
  width: 100%;
  letter-spacing: normal;
  text-transform: none;
  color: #D0021B;
  font-weight: 400;
  text-align: left;
  margin: 0.2em 0 0;
  padding: 0;
  font-size: 0.88em;
  line-height: 1.91;
`;

export const Input = styled.input`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.2;

  flex: 1;
  margin: 0;
  padding: 1em 1.4em;
  border: 1px solid #EAEAEA;
  color: #333;
  background-color: #fff;

  vertical-align: middle;
  border-radius: 0;
  box-shadow: none;
  -webkit-appearance: none;

  &::placeholder {
    color: #EAEAEA;
    opacity: 0.8;
  }

  &:disabled,
  &[disabled],
  &[readonly] {
    color: #8F8F8F;
  }

  &[disabled],
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:invalid,
  &.error,
  &.invalid {
    border-color: #D0021B;
  }

  &:focus,
  &:active {
    box-shadow: inset 0 0 0 3px rgba(0, 123, 255, 0.75);
    border-color: #80bdff;
    outline: none;
  }
`;

export const Select = styled.select`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.2;

  margin: 0;
  padding: 1em 2.4em 1em 1.4em;
  border: 1px solid #EAEAEA;
  color: #333;
  background-color: #fff;
  vertical-align: middle;
  border-radius: 0;

  appearance: none;

  &::-ms-expand {
    display: none;
  }

  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCAxMCA1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMCwyMi41aDEwbC01LDVMMCwyMi41eiIvPjwvc3ZnPg==);
  background-repeat: no-repeat;
  background-position: right 1em center;

  &::placeholder {
    color: #EAEAEA;
    opacity: 0.8;
  }

  &:disabled,
  &[readonly] {
    color: #8F8F8F;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.error,
  &.invalid {
    border-color: #D0021B;
  }

  &:focus,
  &:active {
    box-shadow: inset 0 0 0 3px rgba(0, 123, 255, 0.75);
    border-color: #80bdff;
    outline: none;
  }
`;