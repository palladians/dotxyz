import { box, container } from '../../styled-system/patterns'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      className={box({
        borderTop: '1px gray solid',
        borderTopColor: 'gray.200'
      })}
    >
      <div className={container({ paddingY: '2rem', textAlign: 'center' })}>
        &copy; {year} Palladians
      </div>
    </div>
  )
}
