import Link from 'next/link';
import { FaHotel } from "react-icons/fa";
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FaHotel className='w-6 h-6' />
      </Link>
    </Button>
  );
}
export default Logo