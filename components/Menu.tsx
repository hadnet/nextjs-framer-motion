import React from 'react';
import {NextRouter, withRouter} from 'next/router';
import styled, {DefaultTheme, StyledComponent} from 'styled-components';
import {
  initializeIcons,
  ThemeContext,
  Toggle as FUIToggle,
  Layer,
  Pivot,
  PivotItem,
  IPivotItemProps,
  Theme,
} from '@fluentui/react';
// import {Logo} from './Logo';

initializeIcons();

type Props = {
  router?: Partial<NextRouter>;
  changeTheme: () => void;
};

type NavProps = {background?: string};
type Nav = StyledComponent<'div', DefaultTheme, NavProps> & {
  RightSide: StyledComponent<'div', DefaultTheme, NavProps>;
  Header: StyledComponent<'div', DefaultTheme>;
};

const Toggle = styled(FUIToggle)`
  margin-bottom: 0;
  margin-left: 8px;
`;

const Brand = styled.div<{color?: string}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
  ::after {
    display: flex;
    align-items: center;
    content: '';
    border-right: 1px solid ${(props) => props.color ?? '#fff'};
    padding-right: 16px;
    height: 44px;
  }
`;

const Nav: Nav = styled.div<NavProps>`
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.background ?? 'transparent'};
  //position: sticky;
  //top: 0;
  //left: 0;
  //z-index: 1000;
  //& button {
  //  color: white !important;
  //}
` as Nav;

Nav.RightSide = styled.div<NavProps>`
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: ${(props) => props.background ?? 'transparent'};
`;

Nav.Header = styled(Nav.RightSide)`
  justify-content: flex-start;
`;

// eslint-disable-next-line
@(withRouter as any)
export default class Menu extends React.Component<Props> {
  static contextType = ThemeContext;

  render() {
    const {palette}: Theme = this.context;
    const {push, pathname} = this.props.router as Partial<NextRouter>;
    const currentTab = pathname?.slice(1) ?? '';
    return (
      <Layer>
        {/*<Nav background={palette.white}>*/}
        <Nav>
          <Nav.Header />
          <Nav.RightSide background={palette.white}>
            <Pivot
              headersOnly
              onLinkClick={(item?: PivotItem & IPivotItemProps) => {
                push?.(`/${item?.props?.itemKey ?? ''}`);
              }}
              selectedKey={`${currentTab.includes(currentTab) ? currentTab : ''}`}
            >
              <PivotItem itemKey={``} headerText="Home" itemIcon="Home" />
              <PivotItem itemKey={`about`} headerText="About" itemIcon="Contact" />
            </Pivot>
            <Toggle defaultChecked onChange={() => this.props.changeTheme()} />
          </Nav.RightSide>
        </Nav>
      </Layer>
    );
  }
}
