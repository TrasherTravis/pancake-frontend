import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'
import styled from 'styled-components'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
  buttonColor?: string
  textColor?: string
  absolute?: boolean
}
const Farmer = styled.div<{absolute:boolean}>`
  @media (min-width: 1440px){
    position: absolute;
    top: -150px;
    right: -250px;
  }
  @media (min-width: 851px) and (max-width: 1440px){
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media (max-width: 851px) {
    position: relative;
    margin-left: auto;
    img {
      max-height: 192px;
    }
  }
`
const SalesSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images, buttonColor, textColor, absolute } = props

  return (
    <Flex flexDirection="column" style={{ position:"relative"}} >
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >

        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          { absolute && <Farmer absolute={absolute}><CompositeImage {...images} /></Farmer>}

          <ColoredWordHeading text={headingText} {...(textColor && { style: { color: `${textColor}` } })} />
          <Text color={`${textColor || 'textSubtle'}`} mb="24px">
            {bodyText}
          </Text>
          <Flex>
            <Button mr="16px" {...(buttonColor && { style: { backgroundColor: `${buttonColor}` } })}>
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to} color={`${buttonColor || 'gold'}`}>
                {secondaryButton.text}
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to}>{secondaryButton.text}</RouterLink>
            )}

          </Flex>

        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          { !absolute && <CompositeImage {...images} />}
        </Flex>
          </Flex>
    </Flex>
  )
}

export default SalesSection
