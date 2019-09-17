import React from 'react';
import { mount, shallow } from 'enzyme/build';
import { MemoryRouter } from 'react-router-dom';
import SidebarPanels from '../SidebarPanels';

// mock lazy import paths onto regular imports
jest.mock('../SidebarUtils', () => ({
    getAsyncSidebarContent: jest.fn(panelName => {
        return {
            details: function DetailsSidebar() {
                return <div data-testid="details-sidebar" />;
            },
            metadata: function MetadataSidebar() {
                return <div data-testid="metadata-sidebar" />;
            },
            skills: function SkillsSidebar() {
                return <div data-testid="skills-sidebar" />;
            },
            activity: function ActivitySidebar() {
                return <div data-testid="activity-sidebar" />;
            },
            versions: function VersionsSidebar() {
                return <div data-testid="versions-sidebar" />;
            },
        }[panelName];
    }),
}));

describe('elements/content-sidebar/SidebarPanels', () => {
    const getWrapper = props => shallow(<SidebarPanels file={{ id: '' }} isOpen {...props} />);

    describe('render', () => {
        test('should render no sidebar', () => {
            const wrapper = getWrapper();
            expect(wrapper).toMatchSnapshot();
        });

        describe('skills sidebar', () => {
            test('should render default component', () => {
                const wrapper = getWrapper({ hasSkills: true });
                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('activity sidebar', () => {
            test('should render without deeplink', () => {
                const wrapper = getWrapper({ hasActivity: true });
                expect(wrapper).toMatchSnapshot();
            });

            test('should pass itemType and itemID from url to activity sidebar', () => {
                const wrapper = mount(
                    <MemoryRouter initialEntries={['/activity/tasks/12345']} initialIndex={0}>
                        <SidebarPanels hasActivity file={{ id: '1234' }} isOpen />
                    </MemoryRouter>,
                );
                expect(wrapper.find('ActivitySidebar').props()).toMatchObject({
                    activeFeedItemType: 'task',
                    activeFeedItemId: '12345',
                });
            });

            test('should render with versions deeplink', () => {});
        });

        describe('details sidebar', () => {
            test('should render without versions deeplink', () => {
                const wrapper = getWrapper({ hasDetails: true });
                expect(wrapper).toMatchSnapshot();
            });

            test('should render with versions deeplink', () => {});

            test('should render versions', () => {
                const wrapper = getWrapper({ hasVersions: true });
                expect(wrapper).toMatchSnapshot();
            });
        });

        describe('metadata sidebar', () => {
            test('should render default component', () => {
                const wrapper = getWrapper({ hasMetadata: true });
                expect(wrapper).toMatchSnapshot();
            });
        });
    });
});
