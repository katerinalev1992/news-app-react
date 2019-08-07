
import { ABOUT, ACCOUNT, NEWS, HOME, SIGN_UP, SIGN_IN, PASSWORD_FORGET, DETAILED } from '../constants/routes';
import { Home } from '../components/Home/Home';
import About from '../components/About/About';
import Account from '../components/Account/Account';
import { PasswordForget } from '../components/PasswordForget';
import { SignUp } from '../components/SignUp';
import { SignIn } from '../components/SignIn';
import DetailedNewsItem from '../components/news/DetailedNewsItem';

export interface AppRoute {
    path: string;
    component: any;
    exact: boolean;
}
export const AppRoutes: AppRoute[] = [
    {
        path: HOME,
        component: Home,
        exact: true
    },
    {
        path: SIGN_UP,
        component: SignUp,
        exact: true
    },
    {
        path: SIGN_IN,
        component: SignIn,
        exact: true
    },
    {
        path: ABOUT,
        component: About,
        exact: true
    },
    {
        path: ACCOUNT,
        component: Account,
        exact: true
    },
    {
        path: PASSWORD_FORGET,
        component: PasswordForget,
        exact: true
    },
    {
        path: DETAILED,
        component: DetailedNewsItem,
        exact: true
    },
];
