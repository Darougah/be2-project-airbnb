import { Input } from '../ui/input';

function NavSearch() {
  return (
    <Input
      type='text'
      placeholder='Search for a property...'
      className='max-w-xs dark:bg-muted '
    />
  );
}
export default NavSearch;