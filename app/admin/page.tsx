// import ChartsContainer from '@/components/admin/ChartsContainer';
// import StatsContainer from '@/components/admin/StatsContainer';
// import {
//   ChartsLoadingContainer,
//   StatsLoadingContainer,
// } from '@/components/admin/Loading';
// import { Suspense } from 'react';
// async function AdminPage() {
//   return (
//     <>
//       <Suspense fallback={<StatsLoadingContainer />}>
//         <StatsContainer />
//       </Suspense>
//       <Suspense fallback={<ChartsLoadingContainer />}>
//         <ChartsContainer />
//       </Suspense>
//     </>
//   );
// }
// export default AdminPage;

// app/admin/page.tsx
import ChartsContainer from '@/components/admin/ChartsContainer';
import StatsContainer from '@/components/admin/StatsContainer';
import UserProperties from '@/components/admin/UserProperties';
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from '@/components/admin/Loading';
import { Suspense } from 'react';

async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
      {/* Include the UserProperties component */}
      <Suspense fallback={<div>Loading properties...</div>}>
        <UserProperties />
      </Suspense>
    </>
  );
}

export default AdminPage;
