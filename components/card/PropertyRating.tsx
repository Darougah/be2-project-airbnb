// import { FaStar } from 'react-icons/fa';

// async function PropertyRating({
//   propertyId,
//   inPage,
// }: {
//   propertyId: string;
//   inPage: boolean;
// }) {
  
//   const rating = 4.2;
//   const count = 100;

//   const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
//   const countText = count > 1 ? 'reviews' : 'review';
//   const countValue = `(${count}) ${inPage ? countText : ''}`;
//   return (
//     <span className={className}>
//       <FaStar className='w-3 h-3' />
//       {rating} {countValue}
//     </span>
//   );
// }

// export default PropertyRating;

// import { FaStar } from 'react-icons/fa';

// function PropertyRating({ inPage }: { inPage: boolean }) {
//   const rating = 4.2;
//   const count = 100;

//   const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
//   const countText = count > 1 ? 'reviews' : 'review';
//   const countValue = `(${count}) ${inPage ? countText : ''}`;

//   return (
//     <span className={className}>
//       <FaStar className="w-3 h-3" />
//       {rating} {countValue}
//     </span>
//   );
// }

// export default PropertyRating;


// 'use client';

// import { useEffect, useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// interface PropertyRatingProps {
//   propertyId: string;
//   inPage: boolean;
// }

// function PropertyRating({ propertyId, inPage }: PropertyRatingProps) {
//   const [rating, setRating] = useState<number | null>(null);
//   const [count, setCount] = useState<number | null>(null);

//   useEffect(() => {
//     async function fetchRating() {
//       try {
//         // Replace with your actual API endpoint
//         const response = await fetch(`/api/properties/${propertyId}/rating`);
//         const data = await response.json();
//         setRating(data.rating);
//         setCount(data.count);
//       } catch (error) {
//         console.error('Failed to fetch property rating:', error);
//       }
//     }

//     fetchRating();
//   }, [propertyId]);

//   if (rating === null || count === null) {
//     return (
//       <span className={`flex items-center ${inPage ? 'text-md' : 'text-xs'}`}>
//         Loading...
//       </span>
//     );
//   }

//   const className = `flex gap-1 items-center ${
//     inPage ? 'text-md' : 'text-xs'
//   }`;
//   const countText = count > 1 ? 'reviews' : 'review';
//   const countValue = `(${count}) ${inPage ? countText : ''}`;

//   return (
//     <span className={className}>
//       <FaStar className="w-3 h-3" />
//       {rating} {countValue}
//     </span>
//   );
// }

// export default PropertyRating;

import { fetchPropertyRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  const { rating, count } = await fetchPropertyRating(propertyId);
  if (count === 0) return null;
  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
  const countText = count === 1 ? 'review' : 'reviews';
  const countValue = `(${count}) ${inPage ? countText : ''}`;
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;