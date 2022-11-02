import { Box, BoxProps, Flex, FlexProps } from '@pancakeswap/uikit'
import { ClipFill, DividerFill } from './types'

import { Clip } from 'views/Home'
import Container from 'components/Layout/Container'
import CurvedDivider from './CurvedDivider'
import styled from 'styled-components'
import { useMemo } from 'react'

interface PageSectionProps extends BackgroundColorProps {
  svgFill?: string
  dividerComponent?: React.ReactNode
  hasCurvedDivider?: boolean
  dividerPosition?: 'top' | 'bottom'
  concaveDivider?: boolean
  containerProps?: BoxProps
  innerProps?: BoxProps
  clipFill?: ClipFill
  dividerFill?: DividerFill
  clipPath?:boolean
  firstSection?:boolean
}

interface BackgroundColorProps extends FlexProps {
  index: number
  padding?: string
}

interface SectionProps extends BoxProps {
  firstSection: boolean
}

const BackgroundColor = styled(Flex).attrs({ className: 'page-bg' as string })<BackgroundColorProps>`
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: ${({ index }) => index - 1};
  padding: ${({ padding }) => padding};
`

const ChildrenWrapper = styled(Container)`
  min-height: auto;
  padding-top: 16px;
  padding-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`

const WrappedBox = styled(Box)<SectionProps>`
  .page-bg {
    ${({firstSection}) => firstSection ? `
    padding-top: 16px;

    @media screen and (min-width: 852px) {
      padding-top: 48px;
    };` 
    : null};
  }
`

const PageSection: React.FC<React.PropsWithChildren<PageSectionProps>> = ({
  children,
  svgFill,
  index = 1,
  dividerComponent,
  dividerPosition = 'bottom',
  hasCurvedDivider = true,
  concaveDivider = false,
  clipFill,
  dividerFill,
  containerProps,
  innerProps,
  clipPath,
  firstSection,
  ...props
}) => {
  const padding = useMemo(() => {
    // No curved divider
    if (!hasCurvedDivider) {
      return '48px 0'
    }
    // Bottom curved divider
    // Less bottom padding, as the divider is present there
    if (dividerPosition === 'bottom') {
      return '48px 0 14px'
    }
    // Top curved divider
    // Less top padding, as the divider is present there
    if (dividerPosition === 'top') {
      return '14px 0 48px'
    }
    return '48px 0'
  }, [dividerPosition, hasCurvedDivider])
  
  return (
    <WrappedBox {...containerProps} firstSection={containerProps?.id === 'home-1'}>
      {hasCurvedDivider && dividerPosition === 'top' && (
        <CurvedDivider
          svgFill={svgFill}
          index={index}
          concave={concaveDivider}
          dividerPosition={dividerPosition}
          dividerComponent={dividerComponent}
          clipFill={clipFill}
          dividerFill={dividerFill}
        />
      )}
      <BackgroundColor index={index} padding={padding} {...props}>
        <ChildrenWrapper {...innerProps}>{children}</ChildrenWrapper>
      </BackgroundColor>
      { clipPath && <Clip/>}
      {hasCurvedDivider && dividerPosition === 'bottom' && (
        <CurvedDivider
          svgFill={svgFill}
          index={index}
          concave={concaveDivider}
          dividerPosition={dividerPosition}
          dividerComponent={dividerComponent}
          clipFill={clipFill}
          dividerFill={dividerFill}
        />
      )}

    </WrappedBox>
  )
}

export default PageSection
