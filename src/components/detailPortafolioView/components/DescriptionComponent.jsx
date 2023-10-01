import {
  DescriptionComponents,
  KeyDescription,
  KeyValue,
} from './PorfolioSections.components'

export const DescriptionComponent = ({
  KeyDescriptions = 'Description',
  KeyValues = 'Value',
}) => {
  return (
    <>
      <DescriptionComponents>
        <KeyDescription>{KeyDescriptions}</KeyDescription>
        <KeyValue>{KeyValues}</KeyValue>
      </DescriptionComponents>
    </>
  )
}
