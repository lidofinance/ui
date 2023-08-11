import styled from 'styled-components'

export const RangeInputSlider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  position: absolute;
  margin: 0;
  top: 56px;
  left: 0;
  right: 0;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: transparent;
    border: 0;
    border-radius: 10px;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    margin-top: -8px;
    width: 18px;
    height: 18px;
    background: #ffffff;
    box-shadow:
      0 0.5px 4px rgba(0, 0, 0, 0.12),
      0 6px 13px rgba(0, 0, 0, 0.12);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    background: #00a3ff;
    border: 0;
    border-radius: 10px;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
  }

  &::-ms-track {
    background: transparent;
    color: transparent;
    width: 100%;
    height: 2px;
    cursor: pointer;
  }
`

export const Track = styled.div<{
  fillPercentage: number
  borderNone?: boolean
}>`
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--lido-color-border);

  ${(props) =>
    props.borderNone &&
    `
    background: none;
    `};

  &:before {
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    bottom: 0;
    left: 0;
    background: var(--lido-color-primary);
    width: ${(props) => props.fillPercentage || 0}%;
  }
`

export const Slider = styled.div<{
  borderNone?: boolean
}>`
  position: relative;
  height: 56px;
  padding: 16px 20px;
  box-sizing: border-box;

  background: var(--lido-color-accentControlBg);
  border-right: 1px solid var(--lido-color-border);
  border-left: 1px solid var(--lido-color-border);
  border-top: 1px solid var(--lido-color-border);

  ${(props) =>
    props.borderNone &&
    `
    border-right: none;
    border-left: none;
    border-top: none;
    `};

  border-radius: 10px;
  overflow: hidden;
`

export const SliderWrapper = styled.div`
  position: relative;
`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
`

export const LabelButton = styled.button`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--lido-color-text);
  opacity: 0.5;
  cursor: pointer;
`
