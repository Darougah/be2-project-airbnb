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


import { FaStar } from 'react-icons/fa';

function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  // Use propertyId in your component logic
  // For example, fetch rating data based on propertyId
  // This prevents ESLint errors about unused variables

  const rating = 4.2; // Replace with actual rating fetched using propertyId
  const count = 100;  // Replace with actual count fetched using propertyId

  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
  const countText = count > 1 ? 'reviews' : 'review';
  const countValue = `(${count}) ${inPage ? countText : ''}`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
