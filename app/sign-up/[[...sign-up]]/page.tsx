import { SignUp } from '@clerk/nextjs';
export default function Page() { return <div className='flex justify-center py-12'><SignUp routing='path' path='/sign-up' fallbackRedirectUrl='/' /></div>; }
