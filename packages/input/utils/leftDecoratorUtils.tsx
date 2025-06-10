import { ReactElement } from 'react'
import { Search } from '../../icons'

export type GetLeftDecoratorParams = {
  leftDecorator?: ReactElement
  type?: string
}

/**
 * Returns the appropriate left decorator based on props and input type
 * If a custom leftDecorator is provided, it will be used
 * Otherwise, if type is 'search', a search icon will be used
 */
export const getLeftDecorator = ({
  leftDecorator,
  type,
}: GetLeftDecoratorParams): ReactElement | null => {
  if (leftDecorator) {
    return leftDecorator
  }

  if (type === 'search') {
    return <Search width={24} height={24} />
  }

  return null
}
