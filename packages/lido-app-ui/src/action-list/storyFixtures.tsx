export const TintedCircle = ({ size }: { size: number }) => (
  <span
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--lido-app-ui-color-tint-active)',
    }}
  />
)
