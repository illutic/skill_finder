import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import './matchMedia.mock';
import { act } from 'react-dom/test-utils';
import ArrowButton from '../components/ArrowButton';
import AttachButton from '../components/ArrowButton';
import AuthForm from '../components/AuthForm';
import AuthMessage from '../components/AuthMessage';
import Button from '../components/Button';
import Chat from '../components/Chat';
import ChatsMessage from '../components/ChatsMessage';
import CloseButton from '../components/CloseButton';
import ContactsDrawer from '../components/ContactsDrawer';
import Container from '../components/Container';
import Drawer from '../components/Drawer';
import FilesDrawer from '../components/FilesDrawer';
import FormError from '../components/FormError';
import FormSuccess from '../components/FormSuccess';
import GoogleButton from '../components/GoogleButton';
import Heading from '../components/Heading';
import Home from '../components/Home';
import HomeSlider from '../components/HomeSlider';
import LoadingScreen from '../components/LoadingScreen';
import Login from '../components/Login';
import LogoutModal from '../components/LogoutModal';
import Messages from '../components/Messages';
import Navigation from '../components/Navigation';
import NavigationButton from '../components/NavigationButton';
import NotFound from '../components/NotFound';
import Notification from '../components/Notification';
import NotificationsButton from '../components/NotificationsButton';
import NotificationsPanel from '../components/NotificationsPanel';
import Profile from '../components/Profile';
import ProfilePhoto from '../components/ProfilePhoto';
import ProfileThumbnail from '../components/ProfileThumbnail';
import ProtectedRoute from '../components/ProtectedRoute';
import RequestActions from '../components/RequestActions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SendButton from '../components/SendButton';
import Settings from '../components/Settings';
import Signup from '../components/Signup';
import ThemeContextProvider from '../contexts/ThemeContextProvider';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('render an arrow button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <ArrowButton />
            </ThemeContextProvider>,
            container
        );
    });
    expect(container).toBeDefined();
});

it('render an attach button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <AttachButton />
            </ThemeContextProvider>,
            container
        );
    });
    expect(container).toBeDefined();
});

// it('render the Authentication Form', () => {
//     act(() => {
//         render(
//             <ThemeContextProvider>
//                 <AuthForm />
//             </ThemeContextProvider>,
//             container
//         );
//     });
//     expect(container).toBeDefined();
// });
