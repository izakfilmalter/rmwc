import React from 'react';
import { mount } from 'enzyme';
import { TabBar, Tab, TabBarScroller } from './';

describe('Tabs', () => {
  it('TabBar renders', () => {
    mount(
      <TabBar activeTabIndex={0} onChange={evt => {}}>
        <Tab>Test</Tab>
      </TabBar>
    );
  });

  it('ScrollTab wtih TabBar renders', () => {
    const el = mount(
      <TabBarScroller>
        <TabBar activeTabIndex={0} onChange={evt => {}} />
      </TabBarScroller>
    );
    expect(
      !!~el.html().search('mdc-tab-bar-scroller__scroll-frame__tabs')
    ).toEqual(true);
  });

  it('can have custom classnames', () => {
    [TabBar, Tab].forEach(Component => {
      const el = mount(<Component className={'my-custom-classname'} />);
      expect(!!~el.html().search('my-custom-classname')).toEqual(true);
    });
  });

  it('TabBarScroller renders', () => {
    mount(
      <TabBarScroller>
        <TabBar>
          <Tab>Cookies</Tab>
          <Tab>Pizza</Tab>
          <Tab>Icecream</Tab>
          <Tab>Chocolate</Tab>
          <Tab>Fishsticks</Tab>
          <Tab>Ratatouille</Tab>
          <Tab>Bread</Tab>
          <Tab>Rolls</Tab>
          <Tab>Sushi</Tab>
          <Tab>Cupcake</Tab>
        </TabBar>
      </TabBarScroller>
    );
  });
});
